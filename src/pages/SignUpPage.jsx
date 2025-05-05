import React from "react";
import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <div className="container mx-auto flex h-[70vh] gap-10 items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold lg:text-5xl text-primary">
              Sign Up
            </h2>
          </div>
          <form className="fieldset">
            <label className="label text-primary">Name</label>
            <input type="Text" className="input " placeholder="Name" />
            <label className="label text-primary">Photo URL</label>
            <input type="url" className="input " placeholder="Photo URL" />
            <label className="label text-primary">Email</label>
            <input type="email" className="input " placeholder="Email" />

            <label className="label text-primary">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label text-primary">Confirm Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-secondary mt-4 text-base-100">
              Sign Up
            </button>
            <div className=" text-sm pt-4 gap-0 mx-auto">
              <p className="m-0">
                Already have an Account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="link link-hover text-primary font-semibold ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
