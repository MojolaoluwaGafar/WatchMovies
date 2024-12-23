import React, { useState, useEffect } from "react";

// Sample movie data (replace with your actual data source or API call)
const heroMovies = [
  {
    id: 1,
    title: "Hevin Movie",
    description:
      "Witness the epic tale of courage and betrayal in a mysterious world.",
    imageUrl: "https://via.placeholder.com/1500x600", // Replace with real URLs
    buttonText: "View More",
  },
  {
    id: 2,
    title: "Fallen Stars",
    description: "A gripping drama about love, loss, and second chances.",
    imageUrl: "https://via.placeholder.com/1500x600", // Replace with real URLs
    buttonText: "Discover Now",
  },
];

const HeroSection = () => {
  const [currentMovie, setCurrentMovie] = useState(0);

  // Automatically rotate between movies (carousel effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % heroMovies.length);
    }, 5000); // Switch movie every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const movie = heroMovies[currentMovie];

  return (
    <section
      className="hero-section position-relative d-flex align-items-center text-light"
      style={{
        backgroundImage: `url('${movie.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      {/* Content Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <div className="container text-center" style={{ zIndex: 2 }}>
        {/* Dynamic Title and Description */}
        <h1 className="hero-title display-4 fw-bold">{movie.title}</h1>
        <p className="hero-description lead mt-3">{movie.description}</p>

        {/* Dynamic Buttons */}
        <div className="mt-4">
          <button className="btn herobtn btn-lg me-3">
            {movie.buttonText}
          </button>
          <button className="btn btn-outline-light btn-lg">
            Explore Genres
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
