import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

const Header = () => {
  return (
    <header>
    <div className="navbar"> 
      <h1>Welcome to 75 Hard</h1>
      <nav>
        {/* Add navigation links */}
       <Link to="/.HomePage"> HomePage</Link>
      
      </nav>
      </div>
    </header>
  );
};

export default Header;

