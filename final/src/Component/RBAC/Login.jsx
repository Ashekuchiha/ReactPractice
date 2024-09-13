import React from 'react';
import { useRole } from './RoleContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { selectRole } = useRole();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    selectRole(role);
    if (role === 'user') {
      navigate('/user-dashboard'); 
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  return (
    <div>
      <h3>Select a role to login:</h3>
      <button onClick={() => handleLogin('user')}>Login as User</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
};

export default Login;
