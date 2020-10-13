import React from "react";

const Start = () => {
  return (
    <div className="center">
      <h3> Please enter a search term to find a movie's characters </h3>
      <div>
        <p>Or watch Baby Yoda being adorable!</p> 
        <iframe 
        title="BabyYoda"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/fu8CcZtM8XU" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>
    </div>
  );
}
 
export default Start;