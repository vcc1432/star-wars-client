import React from "react";

const MovieItem = ({ movie }) => {
  return ( 
    <div className="movie-card">
      <div className="movie-poster">
        <img
          alt={`The movie titled: ${movie.title}`}
          src={`/images/${movie.episode_id}.jpg`}
        />
      </div>
      <div className="movie-card-info">
      <h3>{movie.title}</h3>
      <p>({movie.release_date.split('-')[0]})</p>
      </div>
    </div>
  );
}
 
export default MovieItem;