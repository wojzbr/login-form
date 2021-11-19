import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'react';

function ProtectedRoute({ isAuthenticated, children }) {
    // READ ABOUT useAuth() !
    return isAuthenticated ? children : <Navigate to="/login-form/login" />;
  }

export default ProtectedRoute