import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="min-h-[90vh]">
      <Navbar />
      <div className="mt-30 mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
