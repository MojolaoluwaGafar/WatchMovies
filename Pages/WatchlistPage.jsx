import React, { useState } from "react";

const WatchlistPage = () => {
  // Example state to hold movies in the watchlist
  const [watchlist, setWatchlist] = useState([]);

  // Remove movie from the watchlist
  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  return (
    <div className="watchlist-page">
      <div className="container py-4">
        <h1 className="text-center text-light mb-5">Your Watchlist</h1>
        {watchlist.length === 0 ? (
          <div className="empty-watchlist text-center">
            <p className="text-muted">Your Watchlist is Empty!</p>
            <button className="btn herobtn mt-3" onClick={() => {}}>
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="movie-grid d-flex flex-wrap gap-4 justify-content-center">
            {watchlist.map((movie) => (
              <div
                key={movie.id}
                className="movie-card bg-dark rounded-4 text-light shadow-sm"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-thumbnail rounded-top-4"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div className="p-3">
                  <h5 className="fw-bold">{movie.title}</h5>
                  <p className="text-muted small mb-2">
                    {movie.genre} • {movie.runtime}
                  </p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    Remove from Watchlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
