Email Queue Worker

Email queue worker built with BullMQ and Redis for processing emails asynchronously.

Requirements
Docker
Docker Compose
Project Structure
.
├── docker-compose.yml
├── email-worker/
└── backend/

Environment Variables

The worker requires the following SMTP credentials:

SENDER_EMAIL=yourmail@example.com
SMTP_PASS=secret_password

These are configured in docker-compose.yml:

worker:
build: ./email-worker
environment: - SENDER_EMAIL=yourmail@example.com - SMTP_PASS=secret_password

Replace the example values with your actual email and SMTP password.

Tip: For security, use a .env file and add it to .gitignore instead of committing real credentials.

Run

Start all services with:

docker compose up

Or run in the background:

docker compose up -d

This starts:

Redis — BullMQ queue storage
Worker — Processes and sends emails
Backend — Adds email jobs to the queue
Redis Connection

Inside Docker, connect to Redis using:

redis://rediseq:6379

Redis is also exposed locally on:

localhost:6379

Useful Commands

# Stop services

docker compose down

# Rebuild and start

docker compose up --build

# View worker logs

docker compose logs -f worker
