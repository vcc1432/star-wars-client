import React from "react";

const Character = ({ character }) => {
  return ( 
    <div className="character">
      <h2>{character.name}</h2>
      <div className="overlay"></div>
    </div>
   );
}
 
export default Character;