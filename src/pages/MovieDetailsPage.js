import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const movieId = useParams().movieId;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`http://localhost:5000/search/${movieId}`);
        const responseData = await response.json();
        setMovie(responseData);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [movieId]);

  console.log(movie)

  return ( 
    <div>
     { movie && (<div>Movie details page: <strong>{movie.title}</strong></div>)}
    </div>
  );
}
 
export default MovieDetailsPage;