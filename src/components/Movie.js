import React from "react";
import Character from './Character';

const Movie = ({ movie }) => {
  return ( 
    <div className="movie">
      <h1 >{ movie.title }</h1>
      <ul className="character-list">
      {movie.characters.map(character => (
        <Character key={character.id} character={ character }/>
      ))}
    </ul>
    </div> 
  );
}
 
export default Movie;