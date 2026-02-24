# Project Overview

This is a full-stack web application combining a React frontend with a Strapi CMS backend, both containerized and orchestrated using Docker Compose.


# Docker Compose Setup

This project uses separate Docker Compose files for development and production.

## Prerequisites

- Docker Desktop installed on your machine
- Docker Compose (comes with Docker Desktop)

## Development (Docker + hot reload)

```bash
docker compose --env-file .env -f docker-compose.dev.yml up --build
```

Detached:

```bash
docker compose --env-file .env -f docker-compose.dev.yml up -d --build
```

Stop:

```bash
docker compose -f docker-compose.dev.yml down
```

## Production (Docker)

```bash
docker compose --env-file .env -f docker-compose.prod.yml up -d --build
```

Stop:

```bash
docker compose -f docker-compose.prod.yml down
```

## Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:1337

## Compose files

- `docker-compose.dev.yml`: frontend and Strapi in development mode (hot reload + bind mounts)
- `docker-compose.prod.yml`: optimized production mode (`vite build` + static nginx, `strapi start`)

## Useful Commands

```bash
# Stop dev services
docker compose -f docker-compose.dev.yml down

# Stop prod services
docker compose -f docker-compose.prod.yml down

# View logs from dev
docker compose -f docker-compose.dev.yml logs -f

# View logs from prod
docker compose -f docker-compose.prod.yml logs -f

# View logs from a specific service
docker compose -f docker-compose.dev.yml logs -f frontend
docker compose -f docker-compose.dev.yml logs -f strapi

# Rebuild dev images
docker compose -f docker-compose.dev.yml build --no-cache

# Rebuild prod images
docker compose -f docker-compose.prod.yml build --no-cache

# Remove everything including dev volumes
docker compose -f docker-compose.dev.yml down -v
```

## Local (without Docker)

If you prefer running without Docker:

1. Install dependencies locally: `npm install` in both `frontend/` and `strapi/`
2. Run frontend and backend locally:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd strapi && npm run dev`

## Troubleshooting

- If port 5173 or 1337 is already in use, change the port mappings in `docker-compose.dev.yml` / `docker-compose.prod.yml`
- If you get permission issues with volumes, ensure Docker has proper permissions
- Clear Docker cache if you encounter build issues: `docker compose -f docker-compose.dev.yml build --no-cache`
