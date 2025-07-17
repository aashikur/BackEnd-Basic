// src/routes/PrivateRoute.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { Navigate, useLocation } from 'react-router'; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); 
  const location = useLocation(); 

  if (loading) { return <div className="text-center py-10">Loading...</div>;   }

  if (!user || !user.email) {
 
    return <Navigate to="/login" state={ location.pathname } replace />;
  }

  return children; 
};

export default PrivateRoute;