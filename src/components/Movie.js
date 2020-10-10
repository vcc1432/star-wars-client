import React from "react";
import Character from './Character';
import './Movie.css';

const Movie = ({ movie }) => {
  return ( 
    <div class="movie_card">
    <div class="movie-img"></div>
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"/>
          <h1>{ movie.title }</h1>
          <h4>2018, Roar Uthaug</h4>
          <span class="minutes">125 min</span>
          <p class="type">Action, Fantasy</p>
        </div>
        <div class="movie_desc">
          <ul className="character-list">
            {movie.characters.map(character => (
              <Character key={character.id} character={ character }/>
            ))}
          </ul>
        </div>
      </div>
    </div>    
  );
}
 
export default Movie;