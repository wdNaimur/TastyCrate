import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "Tastycrate | Reset Password";
  }, []);
  const location = useLocation();
  const prevEmail = location.state.state.email;
  const { resetPassword } = useContext(AuthContext);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const resetEmail = e.target.email.value;

    resetPassword(resetEmail)
      .then(() => {
        console.log("password change email sent");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };
  return (
    <div className="container mx-auto flex justify-center select-none">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-secondary/5 border-2">
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold lg:text-5xl text-primary">
              Reset Password
            </h2>
          </div>
          <form onSubmit={handleForgotPassword} className="fieldset">
            <label className="label text-primary">Email</label>
            <input
              name="email"
              type="email"
              className="input border-none bg-primary/10 w-full focus:outline-primary/40"
              placeholder="Email"
              defaultValue={prevEmail}
            />

            <button
              type="submit"
              className="btn btn-secondary mt-4 text-base-100"
            >
              Send Password Reset Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
