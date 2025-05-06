import React, { use } from "react";
import Button from "../UI/Button";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Profile from "./Profile";

const navLink = (
  <>
    <li className="text-lg">
      <NavLink to="/" className="hover:bg-primary/30 px-3 py-2 rounded">
        Home
      </NavLink>
    </li>
    <li className="text-lg">
      <NavLink to="/about" className="hover:bg-primary/30 px-3 py-2 rounded">
        About
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar text-primary">
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <Link to="/">
              <img
                className="h-10"
                src="/src/assets/logo-dark.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <Profile user={user} />
            ) : (
              <Link to="/auth/sign-in">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
