import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error404 = () => {
  return (
    <div
      className="error-page text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#181818",
        color: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 404 Graphic */}
      <h1
        className="display-1 fw-bold"
        style={{
          fontSize: "8rem",
          color: "#FF6347",
          textShadow: "0 0 10px rgba(255, 99, 71, 0.8)",
        }}
      >
        404
      </h1>
      <p className="lead mb-4" style={{ maxWidth: "400px" }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Home Button */}
      <Link to="/">
        <button
          className="btn btn-primary btn-lg"
          style={{
            backgroundColor: "#FF6347",
            borderColor: "#FF6347",
            color: "#FFF",
            borderRadius: "30px",
            padding: "10px 25px",
          }}
        >
          <FaHome className="me-2" />
          Return to Homepage
        </button>
      </Link>

      {/* Additional Decorative Elements */}
      <p className="text-muted mt-3">Error Code: 404</p>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        If you think this is a mistake, feel free to contact support.
      </p>
    </div>
  );
};

export default Error404;
