import { Button, Typography, Container, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="md" className="mt-8">
      <Paper elevation={3} className="p-6">
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome, {user?.name}!
        </Typography>
        <Typography align="center" className="mb-6">
          Email: {user?.email}
        </Typography>
        <div className="flex justify-center">
          <Button variant="outlined" onClick={logout} size="large">
            Logout
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Dashboard;
