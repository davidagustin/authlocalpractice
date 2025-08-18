# Simplified Authentication App

A clean, minimal authentication application built with React, Node.js, PostgreSQL, and Material-UI.

## ✨ Features

- **Simplified Architecture**: Minimal code with essential functionality
- **Type Safety**: TypeScript with inline type definitions
- **Modern UI**: Material-UI components with Tailwind CSS for positioning
- **Secure Authentication**: JWT tokens with bcrypt password hashing
- **Native Fetch API**: No external HTTP client dependencies
- **Protected Routes**: Client-side route protection

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI** for components
- **Tailwind CSS** for positioning
- **React Router** for navigation
- **Native Fetch API** for HTTP requests

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **PostgreSQL** with pg
- **bcryptjs** for password hashing
- **jsonwebtoken** for JWT
- **express-validator** for input validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd authlocalpractice
   npm run install-all
   ```

2. **Set up environment:**
   ```bash
   # Copy and configure environment variables
   cp server/env.example server/.env
   # Update DATABASE_URL and JWT_SECRET in server/.env
   ```

3. **Start development servers:**
   ```bash
   npm run dev
   ```

This starts:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## 📁 Project Structure

```
├── client/                     # Frontend React app
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── context/          # React context
│   │   │   └── AuthContext.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── server/                    # Backend Node.js app
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   │   └── database.ts
│   │   ├── middleware/      # Express middleware
│   │   │   └── authGuard.ts
│   │   ├── routes/          # API routes
│   │   │   └── auth.ts
│   │   └── index.ts         # Server entry point
│   └── package.json
└── package.json              # Root package.json
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user (protected) |
| GET | `/api/health` | Health check |

## 🎨 Code Quality Features

### Frontend
- **Inline Types**: TypeScript interfaces defined where needed
- **Native Fetch**: No external HTTP client dependencies
- **Simple Error Handling**: Direct error processing in components
- **Clean Components**: Minimal, focused components

### Backend
- **Validation**: Input validation with express-validator
- **Error Handling**: Consistent error responses
- **Database**: Clean connection management
- **Middleware**: Reusable authentication guard

## 🔒 Security Features

- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Tokens**: 24-hour expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS**: Configured for frontend communication
- **Protected Routes**: Client and server-side protection

## 📝 Development Scripts

```bash
npm run dev          # Start both frontend and backend
npm run server       # Start backend only
npm run client       # Start frontend only
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies
```

## 🧹 Recent Simplifications

- **Removed Dependencies**: Eliminated axios, @emotion/styled, and other unnecessary packages
- **Simplified Structure**: Removed utils/, types/, and services/ directories
- **Native Fetch API**: Replaced axios with native fetch for HTTP requests
- **Inline Types**: Moved type definitions directly into components
- **Cleaner Components**: Removed unnecessary wrapper components and abstractions
- **Reduced Bundle Size**: Smaller, more efficient application

This codebase is now minimal, maintainable, and follows modern React/Node.js best practices with zero unnecessary complexity!
