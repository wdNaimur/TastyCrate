import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/auth/sign-in"
      state={{ from: location.pathname, fromPrivateRoute: true }}
    />
  );
};

export default PrivateRoute;
