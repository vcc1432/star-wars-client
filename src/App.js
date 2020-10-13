import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from "./shared/Header";
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';


const App = () => {
  return (
    <div className="App">
     <Router>
       <Header />
       <main>
        <Switch>
        <Route path="/" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>
        <Redirect to="/" />
        </Switch>
       </main>
      </Router>
    </div>
  );
}

export default App;
