// Authorization.js
import React from 'react';
import { useRole } from './RoleContext';

const Authorization = ({ component: Component, allowedRoles, ...rest }) => {
  const { role } = useRole();
  console.log(role)
  return allowedRoles.includes(role) ? (
    <Component {...rest} />
  ) : (
    <div>You are not authorized to view this page.</div>
  );
};

export default Authorization;
