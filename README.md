# Project Overview

This is a full-stack web application combining a React frontend with a Strapi CMS backend, both containerized and orchestrated using Docker Compose.


# Docker Compose Setup

This project uses Docker Compose to run both the frontend and backend applications.

## Prerequisites

- Docker Desktop installed on your machine
- Docker Compose (comes with Docker Desktop)

## Running the Application

You can start all services with a single command:

```bash
docker compose up
```

To run in detached mode (background):

```bash
docker compose up -d
```

## Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:1337

## Services

### Frontend
- Built with Vite and React
- Runs on port 5173
- Uses http-server for serving the production build

### Backend (Strapi)
- Runs on port 1337
- Uses SQLite database stored in `.tmp/` directory
- Uploads directory is persisted in `public/uploads/`

## Useful Commands

```bash
# Stop all services
docker compose down

# View logs from all services
docker compose logs -f

# View logs from a specific service
docker compose logs -f frontend
docker compose logs -f backend

# Rebuild images (after dependency changes)
docker compose build --no-cache

# Remove everything including volumes
docker compose down -v
```

## Development Mode

If you want to run in development mode with hot reload:

1. Stop the Docker containers: `docker compose down`
2. Install dependencies locally: `npm install` in both `frontend/` and `strapi/` directories
3. Run frontend and backend locally:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd strapi && npm run dev` (in another terminal)

## Troubleshooting

- If port 5173 or 1337 is already in use, change the port mappings in `docker-compose.yml`
- If you get permission issues with volumes, ensure Docker has proper permissions
- Clear Docker cache if you encounter build issues: `docker compose build --no-cache`
