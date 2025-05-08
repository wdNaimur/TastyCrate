import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthenticationLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-30 pb-15 flex-1 bg-base-100 ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthenticationLayout;
