# Clean Authentication App

A modern, clean authentication application built with React, Node.js, PostgreSQL, and Material-UI.

## ✨ Features

- **Clean Architecture**: Well-organized code with separation of concerns
- **Type Safety**: Full TypeScript support with shared types
- **Modern UI**: Material-UI components with Tailwind CSS for positioning
- **Secure Authentication**: JWT tokens with bcrypt password hashing
- **Error Handling**: Centralized error handling with consistent user feedback
- **API Service**: Centralized API calls with interceptors
- **Protected Routes**: Client-side route protection with loading states

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI** for components
- **Tailwind CSS** for positioning
- **React Router** for navigation
- **Axios** for API communication

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
│   │   ├── services/         # API services
│   │   │   └── api.ts
│   │   ├── types/           # TypeScript types
│   │   │   └── index.ts
│   │   ├── utils/           # Utility functions
│   │   │   └── errorHandler.ts
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
- **Shared Types**: Centralized TypeScript interfaces
- **API Service**: Centralized API calls with error handling
- **Error Handling**: Consistent error processing across components
- **Clean Components**: Minimal, focused components with clear responsibilities

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

## 🧹 Code Cleanup Highlights

- **Removed Redundancy**: Eliminated duplicate code and unnecessary abstractions
- **Centralized Logic**: API calls, error handling, and types in dedicated modules
- **Simplified Components**: Clean, focused components with minimal complexity
- **Improved Type Safety**: Shared types and better TypeScript usage
- **Better Error Handling**: Consistent error processing across the app
- **Cleaner Structure**: Logical file organization and separation of concerns

This codebase is now clean, maintainable, and follows modern React/Node.js best practices!
