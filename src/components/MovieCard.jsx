import React from 'react'
import { moviesData } from '../../data'

const MovieCard = ({title, imageUrl, rating}) => {
  return (
    <div>
      <div className="movie-card">
        <img
          src={imageUrl}
          alt={title}
          className="movie-image rounded-3"
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="movie-info text-center mt-3">
          <h5 className="movie-title text-light">{title}</h5>
          <p className="movie-rating text-warning">
            <span className="me-1">⭐</span>
            {rating}/5
          </p>
          <button className="btn herobtn btn-sm mt-2">
            Add to Watchlist
          </button>
        </div>
      </div>
      )
    </div>
  );
}

export default MovieCard