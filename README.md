# YMTL
# YMTL
## YMTL Docker Project

Welcome to the YMTL Docker project! This repository contains a complete setup for a multi-service application using Docker and Docker Compose. The project is designed to demonstrate a clear separation of concerns and facilitate easy development and deployment.

### Project Structure

The project is divided into three main services:

1. **Backend Service**
2. **Database Service**
3. **Frontend Service**

### Docker Compose Configuration

Here's an overview of the `docker-compose.yml` file:

```yaml
version: '3.2'

services:

  backend:
    build:
      context: ./services/backend
      dockerfile: Dockerfile
    entrypoint: ['/usr/src/ymtl/entrypoint.sh']
    volumes:
      - './services/backend:/usr/src/ymtl'
    ports:
      - 5001:5000
    environment:
      - FLASK_ENV=development
      - APP_SETTINGS=app.config.DevelopmentConfig
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/app_dev
      - DATABASE_TEST_URL=postgresql://postgres:postgres@db:5432/app_test
      - SECRET_KEY=change_this_to_some_random_key
    depends_on:
      - db

  db:
    build:
      context: ./services/db
      dockerfile: Dockerfile
    expose:
      - 5432
    ports:
      - 5432:5432
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

  frontend:
    build:
      context: ./services/frontend
      dockerfile: Dockerfile
    volumes:
      - './services/frontend:/usr/src/ymtl'
      - '/usr/src/ymtl/node_modules'
    ports:
      - 3007:3000
    environment:
      - NODE_ENV=development
      - REACT_APP_BACKEND_SERVICE_URL=http://localhost:5001
    depends_on:
      - backend
```

### Service Breakdown

#### Backend Service

- **Directory:** `./services/backend`
- **Dockerfile:** `Dockerfile`
- **Ports:** 5001 (host) -> 5000 (container)
- **Environment Variables:**
  - `FLASK_ENV=development`
  - `APP_SETTINGS=app.config.DevelopmentConfig`
  - `DATABASE_URL=postgresql://postgres:postgres@db:5432/app_dev`
  - `DATABASE_TEST_URL=postgresql://postgres:postgres@db:5432/app_test`
  - `SECRET_KEY=change_this_to_some_random_key`
- **Dependencies:** `db`

#### Database Service

- **Directory:** `./services/db`
- **Dockerfile:** `Dockerfile`
- **Ports:** 5432 (host) -> 5432 (container)
- **Environment Variables:**
  - `POSTGRES_USER=postgres`
  - `POSTGRES_PASSWORD=postgres`

#### Frontend Service

- **Directory:** `./services/frontend`
- **Dockerfile:** `Dockerfile`
- **Ports:** 3007 (host) -> 3000 (container)
- **Environment Variables:**
  - `NODE_ENV=development`
  - `REACT_APP_BACKEND_SERVICE_URL=http://localhost:5001`
- **Dependencies:** `backend`

### How It Works

- **Separation of Concerns:** Each service is isolated in its own Docker container, making the system modular and easy to manage.
- **Networking:** Docker Compose creates a default network for all services defined in the `docker-compose.yml` file. Services communicate over this network using their service names as hostnames.
- **Volume Mounts:** Source code is mounted as volumes to enable live updates during development.

### Useful Commands

1. **Build and start the services:**
   ```sh
   docker-compose up --build
   ```

2. **Stop the services:**
   ```sh
   docker-compose down
   ```

3. **Rebuild a specific service:**
   ```sh
   docker-compose up --build <service_name>
   ```

4. **View logs for a specific service:**
   ```sh
   docker-compose logs <service_name>
   ```

### How This Project Uses Docker

- **Development Environment:** Quickly spin up the entire development environment with a single command.
- **Isolation:** Each component runs in its own container, avoiding conflicts and making it easier to manage dependencies.
- **Consistency:** Ensure the application runs the same way on any environment that supports Docker.

### Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Biniyamseid/YMTL.git
   cd YMTL
   ```

2. **Start the services:**
   ```sh
   docker-compose up --build
   ```

3. **Access the application:**
   - Backend API: [http://localhost:5001](http://localhost:5001)
   - Frontend: [http://localhost:3007](http://localhost:3007)

Enjoy exploring and contributing to the YMTL project! If you have any questions or issues, feel free to open an issue on GitHub.

http://localhost:3007/

http://localhost:3007/login


![alt text](image.png)