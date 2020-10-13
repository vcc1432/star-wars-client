import React from "react";
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
    { movies.map((movie, index) => (
      <MovieItem key={movie.episode_id} movie={movie}/>
    ))}
    </div>
  );
}
 
export default MovieList;