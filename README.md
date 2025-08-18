# Simple Auth App

A minimal authentication application built with React, Node.js, PostgreSQL, and Material UI.

## Features

- User registration and login with bcrypt password hashing
- JWT token-based authentication
- Protected routes with auth guard
- PostgreSQL database
- TypeScript support
- Material UI components
- Simple and clean codebase

## Tech Stack

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with pg
- bcryptjs for password hashing
- jsonwebtoken for JWT
- express-validator for input validation

### Frontend
- React with TypeScript
- React Router for navigation
- Material UI for components
- Axios for API calls
- Vite for build tooling

## Setup

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

3. Set up PostgreSQL database:
   - Create a database named `auth_db`
   - Update `server/env.example` with your database credentials
   - Copy `server/env.example` to `server/.env`

4. Start the development servers:
   ```bash
   npm run dev
   ```

This will start:
- Backend server on http://localhost:5000
- Frontend app on http://localhost:3000

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout (protected)

## Project Structure

```
├── server/                 # Backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── middleware/    # Auth guard middleware
│   │   ├── routes/        # API routes
│   │   └── index.ts       # Server entry point
│   └── package.json
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Auth context
│   │   └── main.tsx       # App entry point
│   └── package.json
└── package.json           # Root package.json
```

## Security Features

- Password hashing with bcrypt (12 salt rounds)
- JWT tokens with 24-hour expiration
- Protected routes with auth guard
- Input validation with express-validator
- CORS enabled for frontend communication
