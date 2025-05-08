import React from "react";
import { NavLink, Link } from "react-router";
import { FaFacebook, FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <li className="text-lg">
        <NavLink to="/" className="hover:bg-primary/30 px-3 py-2 rounded">
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/my-subscription"
          className="hover:bg-primary/30 px-3 py-2 rounded"
        >
          My Subscription
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/profile"
          className="hover:bg-primary/30 px-3 py-2 rounded"
        >
          Profile
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/about-us"
          className="hover:bg-primary/30 px-3 py-2 rounded"
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center  text-primary py-8 px-8 md:px-4 bg-primary/20">
      <aside>
        <Link to="/">
          <div className="flex items-center gap-3 select-none cursor-pointer group">
            <img className="h-8" src="/logo/logo-dark.png" alt="footer-logo" />
          </div>
        </Link>
        <div className="flex  items-center justify-center list-none">
          {links}
        </div>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-5 -mt-3">
          <a href="https://www.facebook.com/mdnaimurwd" target="_blank">
            <FaFacebook
              size={28}
              className="cursor-pointer hover:text-secondary transition-all ease-linear active:scale-95 hover:scale-105"
            />
          </a>
          <a href="https://github.com/wdNaimur" target="_blank">
            <FaGithub
              size={28}
              className="cursor-pointer hover:text-secondary transition-all ease-linear active:scale-95 hover:scale-105"
            />
          </a>
          <a href="https://x.com/WdNaimur" target="_blank">
            <FaSquareXTwitter
              size={28}
              className="cursor-pointer hover:text-secondary transition-all ease-linear active:scale-95 hover:scale-105"
            />
          </a>
        </div>
        <div className="flex  gap-4">
          <Link
            className="link text-primary hover:text-secondary hover:scale-105 transition-all ease-linear"
            to="/terms"
          >
            terms and Conditions
          </Link>
          <Link
            className="link text-primary hover:text-secondary hover:scale-105 transition-all ease-linear"
            to="/privacy"
          >
            privacy policy
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
