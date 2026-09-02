📧 Email Queue Worker

A simple asynchronous email queue system built with BullMQ, Redis, and Docker.

🚀 Add emails to a queue → BullMQ processes them → Worker sends them via SMTP.

✨ Features
📬 Asynchronous email processing
⚡ BullMQ queue
🔴 Redis
🐳 Docker & Docker Compose
🔐 SMTP environment configuration
🏗️ Services
Service	Description
🔴 Redis	Stores BullMQ jobs
⚙️ Worker	Processes and sends emails
🚀 Backend	Adds email jobs to the queue
⚙️ Environment Variables

Update the following values in docker-compose.yml:

environment:
  - SENDER_EMAIL=yourmail@example.com
  - SMTP_PASS=secret_password


Replace them with your actual email and SMTP credentials.

⚠️ Never commit real credentials to GitHub.

🚀 Getting Started
1. Clone the repository
git clone <your-repository-url>
cd <project-directory>

2. Configure SMTP

Set your email and SMTP password in docker-compose.yml:

SENDER_EMAIL=yourmail@example.com
SMTP_PASS=secret_password

3. Start the project
docker compose up


Or run in the background:

docker compose up -d

🔌 Redis

The services connect to Redis using:

redis://rediseq:6379


Redis is exposed locally on:

localhost:6379

🛠️ Useful Commands

Command	Description

docker compose up -------	Start the project
docker compose up -d	------- Start in background
docker compose up --build ------	Rebuild and start
docker compose logs -f worker	------ View worker logs
docker compose down --------	Stop the project


📁 Project Structure
email-queue-worker/
│
├── docker-compose.yml
├── README.md
│
├── email-worker/
│   └── Worker source code
│
└── backend/
    └── Backend source code
