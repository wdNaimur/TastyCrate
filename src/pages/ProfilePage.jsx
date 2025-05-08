import React, { use, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileDetails from "../Components/ProfileDetails";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  useEffect(() => {
    document.title = "Tastycrate | Profile";
  }, []);
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <ProfileDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePage;
