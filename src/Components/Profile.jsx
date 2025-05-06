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
      <div className="dropdown dropdown-end flex gap-2">
        <div className="relative flex items-center justify-center gap-2 group">
          <p className="group-hover:block hidden transition-all ease-linear bg-base-200 pt-1 pb-0.5  rounded-box z-1 w-52 px-1 absolute top-1 right-11 text-center">
            {user.displayName && user.displayName}
          </p>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle avatar shadow-none hover:shadow-none hover:scale-105 transition-all ease-linear "
          >
            <div className="w-10 rounded-full border-2 border-secondary relative  shadow-none hover:shadow-none">
              <img
                alt="Profile"
                src={`
                ${
                  user.photoURL
                    ? user.photoURL
                    : "https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000"
                }`}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-secondary btn text-base-100"
        >
          Sign Out
        </button>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 absolute top-12"
        >
          <li>
            <a>{user.displayName ? user.displayName : "Profile"}</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
