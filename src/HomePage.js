// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import demo from './demo.png';
import Dashboard from './Dashboard';

const HomePage = () => {
  return (
    <div className='Home'>
      <nav>
          <ul>
            <li> <Link to ="/"> Homepage</Link> </li>
            <li> <Link to ="/Dashboard"> Dashboard</Link></li>
            <li> <Link to ="/"> Community</Link></li>
          </ul>
        </nav>
      <p>This is the home page content.</p>

      <header className="App-header">
          <img src={demo} className="HomePage-logo" alt="logo" />
          <p>
            add testimonials
          </p>
        </header>
    </div>
  );
};

export default HomePage;