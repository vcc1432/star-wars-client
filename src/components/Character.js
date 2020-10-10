import React from "react";

const Character = ({ character }) => {
  return ( 
    <div className="character">
      <li>{character.name}</li>
    </div>
   );
}
 
export default Character;