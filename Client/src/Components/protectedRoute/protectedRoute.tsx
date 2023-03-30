import React, {FC} from 'react';
import {Navigate, Route} from "react-router-dom";
const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Navigate
                        to="/login"
                        replace
                        state={{ from: rest.location.pathname }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
