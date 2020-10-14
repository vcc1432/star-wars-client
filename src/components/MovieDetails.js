import React from 'react';

const MovieDetails = ({ movie }) => {
  return ( 
  <div className="movie-card detail">
    <div className="movie-poster">
      <img
        alt={`The movie titled: ${movie.title}`}
        src={`/images/${movie.episode_id}.jpg`}
      />
    </div>
    <div>Movie details page: <strong>{movie.title}</strong></div>
  </div> 
    );
}
 
export default MovieDetails;