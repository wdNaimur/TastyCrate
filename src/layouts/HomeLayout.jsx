import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    document.title = "Tastycrate | Home";
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="pt-20 flex-1">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};

export default HomeLayout;
