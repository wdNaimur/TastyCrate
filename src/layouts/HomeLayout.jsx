import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  useEffect(() => {
    document.title = "Tastycrate | Home";
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
