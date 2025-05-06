import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { useLocation } from "react-router";

const SignInPage = () => {
  const { userSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();

  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userSignIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;

        setError(errorCode);
      });
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-secondary/5 border-2">
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold lg:text-5xl text-primary">
              Sign In
            </h2>
          </div>
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label text-primary">Email</label>
            <input
              name="email"
              type="email"
              className="input "
              placeholder="Email"
            />
            <label className="label text-primary">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div className="space-y-1">
              {error && <p className="text-red-700">{error}</p>}
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-secondary mt-4 text-base-100"
            >
              Sign In
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
