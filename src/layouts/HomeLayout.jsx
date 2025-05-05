import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
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
