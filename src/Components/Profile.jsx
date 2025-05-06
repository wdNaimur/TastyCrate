import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = ({ user }) => {
  const handleSignOut = () => {
    console.log("user trying to logout");
    userSignOut()
      .then(() => {
        console.log("signOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { userSignOut } = use(AuthContext);
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full border-2 border-secondary">
            <img
              alt="Tailwind CSS Navbar component"
              src={`
                ${
                  user.photoURL
                    ? user.photoURL
                    : "https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000"
                }`}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>{user.displayName ? user.displayName : "Profile"}</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="bg-secondary btn text-base-100"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
