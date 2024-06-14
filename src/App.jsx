import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Orders from './components/Orders';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/orders" element={<PrivateRoute> <Orders /> </PrivateRoute>} />
    </Routes>
  );
};

export default App;
