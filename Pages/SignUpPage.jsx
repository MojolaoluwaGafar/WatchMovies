import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Account created successfully!");
  };

  return (
    <div
      className="signup-page d-flex align-items-center justify-content-center"
      style={{ height: "100vh", background: "#1c1c1c" }}
    >
      <div
        className="form-card p-4 rounded-4 shadow"
        style={{
          background: "#2d2d2d",
          color: "#fff",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#008080" }}>
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control bg-transparent text-white border-secondary"
              style={{ borderRadius: "10px" }}
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control bg-transparent text-white border-secondary"
              style={{ borderRadius: "10px" }}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control bg-transparent text-white border-secondary"
              style={{ borderRadius: "10px" }}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control bg-transparent text-white border-secondary"
              style={{ borderRadius: "10px" }}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{
              background: "#008080",
              borderRadius: "20px",
            }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/signin"
            className="text-decoration-none"
            style={{ color: "#008080" }}
          >
            Sign In
          </Link>
        </p>
        <div className="text-center mt-3">
          <p>Or sign up with</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light rounded-5">
              <span className="fs-6 text-danger">
                <FaGoogle />
              </span>
            </button>
            <button className="btn btn-light rounded-5">
              <span className="fs-5 text-primary">
                <FaFacebook />
              </span>
            </button>
            <button className="btn btn-light rounded-5">
              <span className="fs-6 text-dark">
                <FaXTwitter />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
