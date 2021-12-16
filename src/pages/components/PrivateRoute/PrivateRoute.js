import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="success" />;
  }
  if (!user.email) {
    return (
      <>
        {user?.email ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )}
      </>
    );
    // return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
