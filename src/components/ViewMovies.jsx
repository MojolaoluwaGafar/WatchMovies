import React from 'react'
import MovieCard from './MovieCard'
import { moviesData } from '../../data';

const ViewMovies = () => {
  return (
    <div>
      <section className="view-movies py-5 bg-dark">
        <div className="container">
          {/* Section Title */}
          <h2 className="text-light text-center mb-4">View Movies</h2>

          {/* Movies Grid */}
          <div className="row gy-4">
            {moviesData.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <MovieCard
                  title={movie.title}
                  imageUrl={movie.imageUrl}
                  rating={movie.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewMovies