import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    // Email Validation
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)
    ) {
      formErrors.email = "Enter a valid email address.";
    }
    // Password Validation
    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Mock submit for now
      console.log("Form submitted:", { email, password });
      // Reset form fields
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="sign-in bg-dark text-light py-5 d-flex justify-content-center align-items-center">
      <div
        className="form-container bg-secondary p-4 rounded-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control bg-dark text-light ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control bg-dark text-light ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          {/* Remember Me Checkbox */}
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

          {/* Submit Button */}
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn herobtn fw-bold rounded-4 w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
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
