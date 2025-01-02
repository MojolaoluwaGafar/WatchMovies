import React, { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
} from "../../services/movieService";
import MovieCard from "./MovieCard";

const ViewMovies = ({ type = "trending" }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      let data = [];
      try {
        if (type === "trending") {
          data = await fetchTrendingMovies();
        } else if (type === "trending") {
          data = await fetchPopularMovies();
        }
        setMoviesData(data);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
      setLoading(false);
    };

    loadMovies();
  }, [type]);

  return (
    <div>
      <section id="trending" className="view-movies py-5 bg-dark">
        <div className="container">
          <h2 className="text-light text-center mb-4">
            {type === "trending" ? "Trending Movies" : "Popular Movies"}
          </h2>
          {loading ? (
            <div className="text-center text-light">Loading...</div>
          ) : moviesData.length > 0 ? (
            <div className="row gy-4">
              {moviesData.map((movie) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={movie.id}
                >
                  <MovieCard
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    rating={movie.rating}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-light">No movies found!</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ViewMovies;
