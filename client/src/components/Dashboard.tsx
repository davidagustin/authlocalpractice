import { Button, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Box className="mt-8 p-6">
      <Typography variant="h4" className="mb-6 text-center">
        Dashboard
      </Typography>
      <Typography variant="h6" className="mb-4 text-center">
        Welcome, {user?.name}!
      </Typography>
      <Typography className="mb-6 text-center">
        Email: {user?.email}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        onClick={logout}
        size="large"
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
