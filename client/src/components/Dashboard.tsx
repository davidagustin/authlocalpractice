import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="mb-6">Dashboard</h1>
        <p className="mb-4">Welcome!</p>
        <p className="mb-6">Email: {user?.email}</p>
        <button onClick={logout} className="bg-red-500 text-white px-6 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
