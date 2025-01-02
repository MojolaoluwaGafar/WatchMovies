import React from "react";

const MovieDetailsPage = () => {
  return (
    <section className="movie-details bg-dark text-light py-5">
      <div className="container">
        {/* Movie Banner */}
        <div className="movie-banner mb-4">
          <img
            src="https://via.placeholder.com/1200x400" // Replace with actual URL
            alt="Movie Banner"
            className="w-100 rounded-4"
          />
        </div>

        {/* Movie Information */}
        <div className="movie-info d-flex flex-column flex-md-row justify-content-between gap-4">
          <div className="details">
            <h1 className="movie-title">Deadly Shadows</h1>
            <p className="movie-genre">Genre: Thriller, Drama</p>
            <p>Release Date: Jan 12, 2024</p>
            <p>Runtime: 1h 45m</p>
          </div>
          <div className="watchlist-section text-center">
            <button className="btn btn-primary rounded-4">
              Add to Watchlist
            </button>
          </div>
        </div>

        {/* Synopsis */}
        <div className="movie-synopsis mt-5">
          <h2 className="fs-4">Synopsis</h2>
          <p>
            This is a placeholder for the movie's synopsis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur nec commodo odio.
          </p>
        </div>

        {/* Cast & Crew */}
        <div className="cast-crew mt-5">
          <h2 className="fs-4">Cast & Crew</h2>
          <div className="d-flex flex-row flex-wrap gap-4 mt-3">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div className="cast-membe
                \r text-center" key={index}>
                  <img
                    src="https://via.placeholder.com/100x100"
                    alt="Cast Member"
                    className="rounded-circle"
                  />
                  <p className="mt-2">Actor Name</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
