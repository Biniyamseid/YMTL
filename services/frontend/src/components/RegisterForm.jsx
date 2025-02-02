import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const RegisterForm = props => {
  if (props.isAuthenticated()) {
    return <Redirect to="/" />;
  }
  return (
    <section className="hero is-halfheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">Try it out, my friend!</h1>

          <div className="columns is-mobile is-centered">
            <div className="column is-one-third is-mobile is-centered">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: ""
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  props.handleRegisterFormSubmit(values);
                  resetForm();
                  setSubmitting(false);
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string()
                    .required("Username is required.")
                    .min(3, "Username must be greater than 4 characters."),
                  email: Yup.string()
                    .email("Enter a valid email.")
                    .required("Email is required.")
                    .min(6, "Email must be greater than 7 characters."),
                  password: Yup.string()
                    .required("Password is required.")
                    .min(3, "Password must be greater than 4 characters.")
                })}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="field">
                        <label className="label" htmlFor="input-username">
                          Username
                        </label>
                        <input
                          name="username"
                          id="input-username"
                          className={
                            errors.username && touched.username
                              ? "input error"
                              : "input"
                          }
                          type="text"
                          placeholder="Enter a username"
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.username && touched.username && (
                          <div
                            className="input-feedback"
                            data-testid="errors-username"
                          >
                            {errors.username}
                          </div>
                        )}
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="input-email">
                          Email
                        </label>
                        <input
                          name="email"
                          id="input-email"
                          className={
                            errors.email && touched.email
                              ? "input error"
                              : "input"
                          }
                          type="email"
                          placeholder="Enter an email address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <div
                            className="input-feedback"
                            data-testid="errors-email"
                          >
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="input-password">
                          Password
                        </label>
                        <input
                          name="password"
                          id="input-password"
                          className={
                            errors.password && touched.password
                              ? "input error"
                              : "input"
                          }
                          type="password"
                          placeholder="Enter a password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                          <div
                            className="input-feedback"
                            data-testid="errors-password"
                          >
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <input
                        type="submit"
                        className="button is-fullwidth primary-btn is-rounded raised is-primary"
                        value="Register"
                        disabled={isSubmitting}
                      />
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterForm.propTypes = {
  handleRegisterFormSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired
};

export default RegisterForm;
