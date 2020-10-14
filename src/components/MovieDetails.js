import React, { useState } from 'react';

const MovieDetails = ({ movie }) => {
  const [sortedCharacters, setSortedCharacters ] = useState(movie.characters);

  const handleSelectChanges = (e) => {
    sortedCharacters.sort((a, b) => {
      if (e.target.value === 'asc') {
        return parseFloat(a.height) - parseFloat(b.height);
      } else {
        return parseFloat(b.height) - parseFloat(a.height);
      }
    });
    setSortedCharacters([...sortedCharacters])

    console.log(sortedCharacters);
  }

  return ( 
  <div className="movie-card detail">
    <div className="movie-poster">
      <img
        alt={`The movie titled: ${movie.title}`}
        src={`/images/${movie.episode_id}.jpg`}
      />
    </div>
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <h3>Characters: </h3>
      <div className="select">
        <select onChange={ handleSelectChanges }>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <ul>
      { sortedCharacters.map(character => (
        <li key={character.url}>{character.name} ({ character.height} cm) </li>
      ))}
      </ul>
    </div>
  </div> 
    );
}
 
export default MovieDetails;