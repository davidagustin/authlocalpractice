import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Alert, Container, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm" className="mt-8">
      <Paper elevation={3} className="p-6">
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        
        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            className="mt-6 mb-4"
          >
            Login
          </Button>
          <Typography align="center">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
