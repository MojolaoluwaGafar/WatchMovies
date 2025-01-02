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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const formErrors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required.";
    }

    // Email Validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Password Validation
    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Mock submission process
      setTimeout(() => {
        alert("Account created successfully!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setIsSubmitting(false);
      }, 1000);
    }
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
              className={`form-control bg-transparent text-white border-secondary ${
                errors.fullName ? "is-invalid" : ""
              }`}
              style={{ borderRadius: "10px" }}
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && (
              <small className="text-danger">{errors.fullName}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control bg-transparent text-white border-secondary ${
                errors.email ? "is-invalid" : ""
              }`}
              style={{ borderRadius: "10px" }}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control bg-transparent text-white border-secondary ${
                errors.password ? "is-invalid" : ""
              }`}
              style={{ borderRadius: "10px" }}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control bg-transparent text-white border-secondary ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              style={{ borderRadius: "10px" }}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{
              background: "#008080",
              borderRadius: "20px",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
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
