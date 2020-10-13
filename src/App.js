import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from "./shared/Header";
import Movies from './pages/Movies';


const App = () => {
  return (
    <div className="App">
     <Router>
       <Header />
       <main>
        <Route path="/" exact>
          <Movies />
        </Route>
       </main>
      </Router>
    </div>
  );
}

export default App;
