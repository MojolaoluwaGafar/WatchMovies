import React, { useEffect, useState } from "react";

const PopularMoviesSection = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch popular movies dynamically from OMDb API
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);

        // List of popular movie titles (replace with real trending/popular list if available)
        const movieTitles = [
          "Avatar",
          "The Dark Knight",
          "Avengers: Endgame",
          "Titanic",
        ];
        const fetchedMovies = [];

        for (const title of movieTitles) {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${title}&apikey=2ac430ef`
          );
          const data = await response.json();
          if (data.Response === "True") {
            fetchedMovies.push({
              id: data.imdbID,
              title: data.Title,
              year: data.Year,
              rating: data.imdbRating,
              imageUrl:
                data.Poster !== "N/A" ? data.Poster : "/placeholder.jpg",
            });
          }
        }

        setPopularMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <section id="popular" className="popular-movies-section py-5 bg-dark">
      <div className="container">
        <h2 className="text-center text-light mb-4">Popular Movies</h2>

        {loading ? (
          <p className="text-center text-light">Loading popular movies...</p>
        ) : (
          <div className="row gy-4">
            {popularMovies.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <div className="movie-card bg-light shadow rounded">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="rounded-top"
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-3 text-center">
                    <h5 className="text-dark">{movie.title}</h5>
                    <p className="small mb-1">Year: {movie.year}</p>
                    <p className="small text-warning">IMDb: {movie.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularMoviesSection;
