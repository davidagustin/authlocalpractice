import { Button, Typography, Box, Container, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="md" className="mt-8">
      <Box className="flex flex-col items-center">
        <Paper elevation={3} className="p-6 w-full">
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Welcome, {user?.name}!
          </Typography>
          <Typography align="center" className="mb-6">
            Email: {user?.email}
          </Typography>
          <Box className="flex justify-center">
            <Button
              variant="outlined"
              onClick={logout}
              size="large"
            >
              Logout
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
