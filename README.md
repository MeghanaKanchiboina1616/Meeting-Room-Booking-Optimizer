# 🚀 Smart Meeting Room Booking Optimizer

A cloud-based intelligent meeting room scheduling platform that automatically generates optimized meeting schedules using **Google OR-Tools Constraint Programming Solver**.

The application provides a complete full-stack solution with a **React frontend, FastAPI backend, PostgreSQL database, Docker containerization, and AWS cloud deployment**.

---

# ✨ Features

## 🧠 Smart Meeting Scheduling

- Automatically assigns meetings to suitable rooms
- Prevents room booking conflicts
- Optimizes room utilization
- Handles scheduling constraints using Google OR-Tools CP-SAT Solver

## 📅 Meeting Management

- Create meeting requests
- Define meeting duration and participants
- Track scheduled meetings

## 🏢 Room Management

- Add and manage meeting rooms
- Store room capacity and availability
- Prevent double booking

## ⚡ Optimization Engine

The scheduling engine considers:

- Room availability
- Meeting duration
- Time conflicts
- Room capacity
- Scheduling constraints

---

# 🏗️ System Architecture

```text
                     Users
                       │
                       ▼
             React + TypeScript
                       │
                  REST API
                       │
                       ▼
                FastAPI Backend
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
 Google OR-Tools Solver      Amazon RDS PostgreSQL
        │
        ▼
 Optimized Meeting Schedule

──────────────────────────────────────────────

AWS Cloud Deployment

Developer
     │
     ▼
Elastic Beanstalk
     │
     ▼
EC2 Instance
     │
     ▼
FastAPI Application
     │
     ├────────► Amazon RDS PostgreSQL
     │
     ├────────► Amazon S3
     │
     └────────► Amazon CloudWatch
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- TypeScript
- Material UI
- React Query
- React Hook Form
- Zod Validation
- Axios

## Backend

- Python
- FastAPI
- SQLAlchemy ORM
- Alembic
- Google OR-Tools CP-SAT

## Database

- PostgreSQL
- Amazon RDS PostgreSQL

## Cloud & DevOps

- AWS Elastic Beanstalk
- Amazon EC2
- Amazon RDS
- Amazon S3
- AWS IAM
- Amazon CloudWatch
- Docker
- Docker Compose

---

# ☁️ AWS Cloud Implementation

## 1️⃣ AWS Elastic Beanstalk

The FastAPI backend is deployed using **AWS Elastic Beanstalk**.

Elastic Beanstalk manages:

- EC2 infrastructure
- Application deployment
- Environment configuration
- Health monitoring
- Scaling

### Deployment Flow

```text
Developer
    │
    ▼
Application Code
    │
    ▼
Elastic Beanstalk
    │
    ▼
EC2 Instance
    │
    ▼
FastAPI Application
```

---

## 2️⃣ Amazon RDS PostgreSQL

The application uses **Amazon RDS PostgreSQL** as the production database.

### Benefits

- Managed PostgreSQL
- Automated backups
- High availability
- Secure connectivity

### Database Architecture

```text
FastAPI Backend
      │
      ▼
SQLAlchemy ORM
      │
      ▼
Amazon RDS PostgreSQL
```

---

## 3️⃣ Amazon S3 Integration

Amazon S3 is integrated for cloud object storage.

Current/Future Use Cases:

- Application storage
- Static resources
- Report storage
- Backup storage

### Storage Architecture

```text
FastAPI Application
       │
       ▼
      boto3
       │
       ▼
Amazon S3 Bucket
```

---

## 4️⃣ IAM Configuration

AWS IAM provides secure access control between AWS services.

Configured:

- IAM Roles
- Permission Policies
- Secure AWS Service Access

---

## 5️⃣ Amazon CloudWatch

CloudWatch is used for monitoring and troubleshooting.

Features:

- Application logs
- Deployment logs
- Error monitoring
- Health monitoring

---

# 📂 Project Structure

```text
meeting-room-optimizer/

├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── db/
│   │   ├── models/
│   │   ├── optimizer/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── .ebextensions/
│   ├── Procfile
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   │
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/MeghanaKanchiboina1616/Meeting-Room-Booking-Optimizer

cd meeting-room-optimizer
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

alembic upgrade head

uvicorn app.main:app --reload
```

Backend:

```
http://localhost:8000
```

Swagger API:

```
http://localhost:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 🐳 Docker Deployment

Run the complete application:

```bash
docker compose up --build
```

Architecture:

```text
Frontend Container
        │
        ▼
Backend Container
        │
        ▼
PostgreSQL Container
```

---

# 🔌 REST API

## Rooms

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/rooms` | Get all rooms |
| POST | `/api/v1/rooms` | Create room |

---

## Meetings

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/meetings` | Get all meetings |
| POST | `/api/v1/meetings` | Create meeting |

---

## Optimizer

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/optimizer/run` | Generate optimized meeting schedule |

---

# 🧠 Optimization Algorithm

The application uses **Google OR-Tools CP-SAT Solver** to generate optimized meeting schedules.

### Constraints

- Room availability
- Meeting duration
- Room capacity
- Time conflicts
- Scheduling rules

### Optimization Goals

- Minimize scheduling conflicts
- Improve room utilization
- Generate efficient meeting schedules

---

# 🚀 Future Enhancements

- Google Calendar Integration
- Outlook Calendar Integration
- User Authentication
- Role-Based Access Control
- AI-Based Meeting Duration Prediction
- Real-Time Room Availability
- Email Notifications
- CI/CD using AWS CodePipeline & CodeBuild

---

# 👨‍💻 Author

**Meghana Kanchiboyina**

---

# 📄 License

This project is developed for learning, portfolio, and demonstration purposes.
