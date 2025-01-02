import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        // Replace this with the API for popular movies
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=2ac430ef&s=popular`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search || []);
        } else {
          console.error("Error fetching data:", data.Error);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
      setIsLoading(false);
    };
    fetchPopularMovies();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-dark">
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4">Popular Movies</h2>
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
