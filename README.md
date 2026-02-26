# Subscription Tracker API

A production-ready RESTful API for tracking and managing recurring subscriptions. Built with Node.js, Express.js, and MongoDB, the API handles user authentication, subscription management, automated email reminders, bot protection, and rate limiting.

## Features

- JWT-based authentication with protected routes and middleware validation
- Full CRUD operations for subscription management with user-specific data isolation
- Automated email reminders via Upstash Workflows triggered ahead of renewal dates
- Bot detection and rate limiting with Arcjet to protect API endpoints
- Modular MVC architecture across controllers, routes, middleware, models, and utilities
- Environment-based configuration with `.env` support

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Email:** Nodemailer
- **Workflows:** Upstash
- **Security:** Arcjet (bot detection + rate limiting)
- **Linting:** ESLint

## Project Structure
```
├── config/         # Environment and database configuration
├── controllers/    # Route handler logic
├── database/       # Database connection
├── middleware/     # Auth, rate limiting, and bot protection middleware
├── models/         # Mongoose schemas
├── routes/         # API route definitions
├── utils/          # Shared utilities and helpers
└── app.js          # Application entry point
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB instance (local or Atlas)
- Upstash account
- Arcjet account

### Installation
```bash
git clone https://github.com/Dpinto9/subscrition-tracker.git
cd subscrition-tracker
npm install
```

### Environment Variables

Copy the example file and fill in your values:
```bash
cp .env.example .env
```
```env
PORT=
MONGODB_URI=
JWT_SECRET=
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASS=
UPSTASH_WORKFLOW_URL=
ARCJET_KEY=
```

### Run
```bash
npm run dev
```
