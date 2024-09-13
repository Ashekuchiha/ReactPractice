// RoleContext.js
import React, { createContext, useState, useContext } from 'react';

const RoleContext = createContext();

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('user'); // Default role is 'user'
  console.log(role)
  const selectRole = (newRole) => setRole(newRole);

  return (
    <RoleContext.Provider value={{ role, selectRole }}>
      {children}
    </RoleContext.Provider>
  );
};
