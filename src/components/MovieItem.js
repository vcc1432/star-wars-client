import React from "react";
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {

  // Regex to find id in url
  const movieId = movie.url.match(/\d+/g)[0];

  return ( 
    <div className="movie-card list">
      <Link to={`/movies/${movieId}`}>
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
      </Link>
    </div>
  );
}
 
export default MovieItem;