import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header className="App-header">
      <div className="App-header-text">
        <Link to="/"><h1>@</h1></Link>
        <h2>Find your favorite character</h2>
        <h3>“Great, kid. Don’t get cocky.” – Han Solo</h3>
      </div>
    </header>
  );
}
 
export default Header;