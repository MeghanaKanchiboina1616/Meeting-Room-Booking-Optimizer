# Smart Meeting Room Booking Optimizer

A full-stack web application that automates meeting room allocation using constraint optimization. The system allows users to manage rooms and meetings, upload room data through Excel files, and generate optimized room assignments based on meeting requirements.

---

## Features

### Room Management
- View all available meeting rooms
- Add new meeting rooms
- Delete existing rooms
- Store room details such as:
  - Capacity
  - Building
  - Equipment availability
    - Projector
    - Whiteboard
    - Video conferencing

### Meeting Management
- Create meetings with:
  - Title
  - Organizer
  - Number of participants
  - Duration
  - Preferences
- View all scheduled meetings
- Delete meetings

### Smart Optimization
- Uses **Google OR-Tools** constraint solver
- Automatically assigns meetings to suitable rooms based on:
  - Room capacity
  - Equipment requirements
  - Room availability
- Generates optimized meeting-room assignments

### Dashboard
- Total number of rooms
- Total number of meetings
- Total optimized assignments

### ETL Data Ingestion
- Upload room data using Excel files (`.xlsx`)
- Data validation using Pandas
- Bulk insertion into PostgreSQL database

### Database Seeding
- Populate the database with sample room data for testing and development.

---

## Tech Stack

### Backend
- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Docker
- Google OR-Tools
- Pandas
- OpenPyXL
- Pydantic

### Frontend
- React
- TypeScript
- Material UI (MUI)
- React Query (TanStack Query)
- React Hook Form
- Zod
- Axios
- React Router DOM

### DevOps & Tools
- Docker Compose
- Git
- VS Code

---

## Project Structure

```text
meeting-room-optimizer/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── etl/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── seed/
│   │   ├── services/
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── schemas/
│   │   ├── types/
│   │   └── App.tsx
│   │
│   └── package.json
│
├── alembic/
├── alembic.ini
├── docker-compose.yml
└── README.md
```

---

## System Architecture

```text
React + TypeScript + MUI
           ↓
      FastAPI APIs
           ↓
 SQLAlchemy + Alembic
           ↓
      PostgreSQL
           ↓
OR-Tools Constraint Solver
```

---

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+
- Docker Desktop
- Git

---

## Backend Setup

### 1. Clone Repository

```bash
git clone https://github.com/MeghanaKanchiboina1616/Meeting-Room-Booking-Optimizer
cd meeting-room-optimizer
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

Activate:

**Windows**

```powershell
venv\Scripts\activate
```

**Linux/Mac**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 4. Start PostgreSQL Using Docker

```bash
docker compose up -d
```

Verify:

```bash
docker ps
```

---

## Database Migration

Generate migrations:

```bash
alembic revision --autogenerate -m "Initial migration"
```

Apply migrations:

```bash
alembic upgrade head
```

---

## Seed Database

Populate sample room data:

```bash
python -m backend.app.seed.seed_db
```

---

## Run Backend Server

```bash
uvicorn backend.app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## API Endpoints

### Rooms

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/v1/rooms` | Get all rooms |
| POST | `/api/v1/rooms` | Create room |
| GET | `/api/v1/rooms/{id}` | Get room by ID |
| DELETE | `/api/v1/rooms/{id}` | Delete room |
| POST | `/api/v1/rooms/upload` | Upload rooms Excel |

### Meetings

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/v1/meetings` | Get all meetings |
| POST | `/api/v1/meetings` | Create meeting |
| DELETE | `/api/v1/meetings/{id}` | Delete meeting |

### Optimization

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/v1/optimize` | Generate optimized room assignments |

---

## Sample Excel Upload Format

| name | capacity | building | projector | whiteboard | video |
|-------|-----------|-----------|------------|-------------|--------|
| A101 | 10 | Block A | TRUE | TRUE | FALSE |
| B201 | 20 | Block B | TRUE | TRUE | TRUE |
| C301 | 6 | Block C | FALSE | TRUE | FALSE |

Save as:

```text
rooms.xlsx
```

Upload through the **Upload** page.

---

## Optimization Rules

The solver assigns meetings to rooms considering:

- Room capacity must be sufficient for participants.
- Equipment requirements must be satisfied.
- One room can host only one meeting assignment.
- Objective: maximize feasible meeting allocations.

---

## Screenshots

### Dashboard

- Total Rooms
- Total Meetings
- Optimized Meetings

### Rooms Management

- View available rooms
- Equipment details

### Meeting Management

- Create and manage meetings

### Optimizer

- Generate optimal room assignments

### ETL Upload

- Upload Excel room datasets

---

## Future Improvements

- Calendar view for meetings
- Authentication and authorization
- Deployment using Railway and Vercel
- Room utilization analytics
- Meeting conflict detection
- Edit and update functionality

---

## Learning Outcomes

This project provided hands-on experience with:

- Building REST APIs using FastAPI
- Database design with SQLAlchemy
- Managing schema changes using Alembic
- Constraint optimization using Google OR-Tools
- Data ingestion pipelines using Pandas and OpenPyXL
- Full-stack development with React and TypeScript
- Form validation using React Hook Form and Zod
- State management with React Query
- Containerized development using Docker

---

## Author

**Meghana Kanchiboyina**

Built as a portfolio project to gain practical experience in full-stack development, optimization algorithms, ETL pipelines, and modern React applications.

---
