import React, { useReducer, useEffect } from "react";
import './App.css';
import Header from "./Header";
import Search from './Search';

const initialState = {
  loading: true,
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
        errorMessage: action.error
      };
    default:
      return state;
  }
};



function App() {
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
              error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  console.log(state);

  return (
    <div className="App">
       <Header />
       <Search search={search} />
       <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <div>{ movie.title }</div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
