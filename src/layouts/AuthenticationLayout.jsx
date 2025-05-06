import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="min-h-[90vh]">
      <Navbar />
      <div className="pt-30 pb-15">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
