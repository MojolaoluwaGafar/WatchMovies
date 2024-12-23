import React from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <section className="sign-in bg-dark text-light py-5 d-flex justify-content-center align-items-center">
      <div
        className="form-container bg-secondary p-4 rounded-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control bg-dark text-light"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control bg-dark text-light"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember Me
            </label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn herobtn fw-bold rounded-4 w-100">
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p>
            Don't have an account?
            <Link to="/signup" className="text-info text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
