// src/routes/PrivateRoute.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust path
import { Navigate, useLocation } from 'react-router'; // ✅ No need for useNavigate here

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // ✅ Assume 'loading' exists in context
  const location = useLocation(); // ✅ Capture original location

  // if (loading) {
  //   return <div className="text-center py-10">Loading...</div>; // ✅ Handle auth loading
  // }

  if (!user || !user.email) {
    // ✅ Fixed: Self-closing tag + proper state passing
    return <Navigate to="/login" state={ location.pathname } replace />;
  }

  return children; // ✅ Render if authenticated
};

export default PrivateRoute;