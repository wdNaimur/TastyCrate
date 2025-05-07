import React, { use } from "react";
import Navbar from "../Components/Navbar";
import ProfileDetails from "../Components/ProfileDetails";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../Components/Loader";

const ProfilePage = () => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <ProfileDetails />
      </main>
    </div>
  );
};

export default ProfilePage;
