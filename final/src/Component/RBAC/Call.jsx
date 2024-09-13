
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './RoleContext';
import Authorization from './Authorization ';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Login from './Login';

const Call = () => {
  return (
    <RoleProvider>
      <Router>
        <div>
          <h1>Role-Based Access Control Example</h1>
          <Login />
          <Routes>
            <Route 
              path="/user-dashboard"
              element={
                <Authorization component={Dashboard} allowedRoles={['user', 'admin']}/>
              }
            />{console.log("jj")}
            <Route
              path="/admin-dashboard"
              element={
                <Authorization  component={Admin} allowedRoles={['admin']}/>
              }
            />
          </Routes>
        </div>
      </Router>
    </RoleProvider>
  );
};

export default Call;
