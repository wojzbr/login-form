import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const ProtectedRoute = ({ component }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return (
        <Route
            exact path="/protected"
            element={
                isAuthenticated ? component : <Navigate to="/login" />
            }
        />
    )
}

export default ProtectedRoute;