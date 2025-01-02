import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch movie data dynamically from OMDb API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        // List of movies to feature
        const movieTitles = ["Inception", "The Dark Knight", "Interstellar","Spider-man"];
        const fetchedMovies = [];

        for (const title of movieTitles) {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${title}&apikey=2ac430ef`
          );
          const data = await response.json();
          if (data.Response === "True") {
            fetchedMovies.push({
              title: data.Title,
              description: data.Plot,
              imageUrl: data.Poster,
              year: data.Year,
            });
          }
        }

        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies for Hero Section:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Carousel effect: switch movie every 5 seconds
  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentMovieIndex((prev) => (prev + 1) % movies.length);
      }, 5000);

      return () => clearInterval(interval); // Cleanup interval
    }
  }, [movies]);

  // Display loading state or featured movie
  if (loading) {
    return (
      <section className="hero-section bg-dark text-light text-center py-5">
        <p>Loading featured movies...</p>
      </section>
    );
  }

  const movie = movies[currentMovieIndex];

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
          <button className="btn herobtn btn-lg me-3">View More</button>
          <button className="btn btn-outline-light btn-lg">
            Explore Genres
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
