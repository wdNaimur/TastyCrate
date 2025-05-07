import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import ErrorText from "../UI/ErrorText";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Tastycrate | Sign Up";
  }, []);
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    return setShowPassword(!showPassword);
  };
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
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto flex gap-10 items-center justify-center select-none">
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
              className="input border-none bg-primary/10 w-full focus:outline-primary/40"
              placeholder="Name"
              required
            />
            {nameError && <ErrorText>{nameError}</ErrorText>}

            {/* Photo URL */}
            <label className="label text-primary">Photo URL</label>
            <input
              name="url"
              type="url"
              className="input border-none bg-primary/10 w-full focus:outline-primary/40"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="label text-primary">Email</label>
            <input
              name="email"
              type="email"
              className="input border-none bg-primary/10 w-full focus:outline-primary/40"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label text-primary">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input border-none bg-primary/10 w-full focus:outline-primary/40"
                placeholder="Password"
              />
              <a
                onClick={handleTogglePassword}
                className="absolute right-4 cursor-pointer top-1/2 z-50 -translate-y-[50%]"
              >
                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </a>
            </div>
            {errorPassword && <ErrorText>{errorPassword}</ErrorText>}
            {/* Confirm Password */}
            <label className="label text-primary">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="input border-none bg-primary/10 w-full focus:outline-primary/40"
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              className="btn btn-secondary mt-4 text-base-100 w-full"
            >
              Sign Up
            </button>
            <div className="pt-5 border-secondary/40 border-t-2 border-dashed mt-4 ">
              <a
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-secondary/20 shadow-sm shadow-secondary/20 w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign In with Google
              </a>
            </div>

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
