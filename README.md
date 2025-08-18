# Ultra-Simplified Authentication App

A minimal authentication application built with React, Node.js, PostgreSQL, and Tailwind CSS. This app demonstrates the absolute minimum code needed for a functional authentication system.

## ✨ Features

- **Ultra-Minimal Code**: Only essential functionality, no bloat
- **Minimal Dependencies**: React Router + Tailwind CSS only
- **Email-Only Auth**: Simple email/password authentication
- **JWT Tokens**: Secure token-based authentication
- **Protected Routes**: Basic route protection
- **Clean UI**: Minimal Tailwind CSS styling

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS v3** for minimal styling
- **Native Fetch API** for HTTP requests

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **PostgreSQL** with pg
- **bcryptjs** for password hashing
- **jsonwebtoken** for JWT

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
- Backend: http://localhost:5001
- Frontend: http://localhost:3001

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

## 🎨 Minimal Code Examples

### Frontend Component (Login.tsx)
```typescript
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-4"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
```

### Backend Route (auth.ts)
```typescript
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword]
    );

    const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_SECRET!);
    res.json({ user: newUser.rows[0], token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with 10 salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Protected Routes**: Basic client-side protection
- **Database**: PostgreSQL with parameterized queries

## 📝 Development Scripts

```bash
npm run dev          # Start both frontend and backend
npm run server       # Start backend only
npm run client       # Start frontend only
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies
```

## 🧹 Ultra-Minimal Design

### What We Removed:
- ❌ Material-UI (replaced with Tailwind CSS)
- ❌ express-validator (removed validation)
- ❌ CORS (not needed for local dev)
- ❌ Complex error handling
- ❌ TypeScript interfaces
- ❌ Auto-login functionality
- ❌ Name field (email-only auth)

### What We Kept:
- ✅ React Router for navigation
- ✅ Tailwind CSS for minimal styling
- ✅ JWT authentication
- ✅ Password hashing
- ✅ Protected routes
- ✅ PostgreSQL database

## 🎯 Benefits

1. **📝 Minimal Code**: ~50% less code than typical auth apps
2. **⚡ Fast Development**: Fewer dependencies to manage
3. **🎨 Clean UI**: Simple, functional design
4. **🔧 Easy Maintenance**: Less complexity to debug
5. **📦 Small Bundle**: Minimal dependencies

This is the absolute minimum code needed for a functional authentication system! 🎉
