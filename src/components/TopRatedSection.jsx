import React, { useEffect, useState } from "react";

const TopRatedSection = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch top-rated movies dynamically from OMDb API
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        setLoading(true);

        // List of movie titles considered "top-rated"
        const movieTitles = [
          "The Godfather",
          "The Shawshank Redemption",
          "Forrest Gump",
          "Pulp Fiction",
          "Avengers"
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
              rating: data.imdbRating,
              imageUrl:
                data.Poster !== "N/A" ? data.Poster : "/placeholder.jpg",
              year: data.Year,
            });
          }
        }

        setTopRatedMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <section id="toprated" className="top-rated-section py-5 bg-teal">
      <div className="container">
        <h2 className="text-center mb-4">Top Rated Movies</h2>

        {loading ? (
          <p className="text-center">Loading top-rated movies...</p>
        ) : (
          <div className="row gy-4">
            {topRatedMovies.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <div className="movie-card shadow rounded bg-white">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="rounded-top movie-image"
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="movie-info p-3 text-center">
                    <h5 className="text-dark mb-2">{movie.title}</h5>
                    <p className="mb-1">IMDb: {movie.rating}</p>
                    <p className="small text-muted">{movie.year}</p>
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

export default TopRatedSection;
