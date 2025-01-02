import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../src/components/Header";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // Extract the search term from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  // Fetch search results
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchTerm) return;

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(
            searchTerm
          )}&apikey=2ac430ef`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="bg-dark">
      <Header />
      <div className="container py-5">
        <h2 className="text-light text-center">
          Search Results for "{searchTerm}"
        </h2>
        <div className="row gy-3 mt-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card bg-dark text-light">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.Title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h6>{movie.Title}</h6>
                    <p className="small">{movie.Year}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-light">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
