import React, { useReducer } from "react";
import Search from '../components/Search';
import Start from '../components/Start';
import MovieList from "../components/MovieList";

const initialState = {
  loading: false,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
        movies: []
      };
    default:
      return state;
  }
};

const MoviesPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

      fetch(`http://localhost:5000/search?q=${searchValue.query}&orderBy=${searchValue.orderBy}`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.count > 0) {
          dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.results
          });
        } else {
          dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: "No movies found for this search term. Maybe try again?"
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div>
       <Search search={search} />
        {loading && !errorMessage && (
          <div className="center">
            <span>loading... </span>
          </div>
        )}
        { !loading && movies.length < 1 && !errorMessage && <Start />}
        { errorMessage && (
          <div className="errorMessage center">{errorMessage}</div>
        )}
        { !loading && movies && <MovieList movies={ movies }/> }
    </div>
  );
}
 
export default MoviesPage;