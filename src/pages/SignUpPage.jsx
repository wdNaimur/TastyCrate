import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import ErrorText from "../UI/ErrorText";

const SignUpPage = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
    } else {
      setNameError("");
    }
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 8) {
      setErrorPassword("Password should be at least 8 character");
    } else {
      setErrorPassword("");
    }
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        updateUser({
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: url });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
      });
  };

  return (
    <div className="container mx-auto flex gap-10 items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp} className="fieldset">
            {/* Name */}
            <label className="label text-primary">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
              required
            />
            {nameError && <ErrorText>{nameError}</ErrorText>}

            {/* Photo URL */}
            <label className="label text-primary">Photo URL</label>
            <input
              name="url"
              type="url"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="label text-primary">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label text-primary">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />
            {errorPassword && <ErrorText>{errorPassword}</ErrorText>}
            {/* Confirm Password */}
            <label className="label text-primary">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="input input-bordered w-full"
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              className="btn btn-secondary mt-4 text-base-100 w-full"
            >
              Sign Up
            </button>

            <div className="text-sm pt-4 text-center">
              <p>
                Already have an Account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="link link-hover text-primary font-semibold"
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
