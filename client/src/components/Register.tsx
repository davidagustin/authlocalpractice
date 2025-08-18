import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Box, Alert, Container, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { handleApiError } from '../utils/errorHandler';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register, user, loading } = useAuth();
  const navigate = useNavigate();

  if (user && !loading) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(handleApiError(error));
    }
  };

  return (
    <Container maxWidth="sm" className="mt-8">
      <Box className="flex flex-col items-center">
        <Paper elevation={3} className="p-6 w-full">
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          
          {error && <Alert severity="error" className="mb-4">{error}</Alert>}
          
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
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
              Register
            </Button>
            <Typography align="center">
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
