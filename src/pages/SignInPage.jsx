import React from "react";
import { Link } from "react-router";

const SignInPage = () => {
  return (
    <div className="container mx-auto flex h-[70vh] gap-10 items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold lg:text-5xl text-primary">
              Login
            </h2>
          </div>
          <form className="fieldset">
            <label className="label text-primary">Email</label>
            <input type="email" className="input " placeholder="Email" />
            <label className="label text-primary">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>
            <button className="btn btn-secondary mt-4 text-base-100">
              Login
            </button>
            <div className=" text-sm pt-4 gap-0 mx-auto">
              <p className="m-0">
                Don't have an Account?{" "}
                <Link
                  to="/auth/sign-up"
                  className="link link-hover text-primary font-semibold ml-1"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
