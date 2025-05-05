import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="min-h-[90vh]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
