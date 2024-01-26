// HomePage.js
import React from 'react';
import logo from './logo.svg';

const HomePage = () => {
  return (
    <div className='Home'>
        
      <h1>Welcome to 75hard!</h1>
      <p>This is the home page content.</p>

      <header className="App-header">
          <img src={logo} className="HomePage-logo" alt="logo" />
          <p>
            Edit <code>src/HomePage.js</code> and save to reload.
          </p>
          <a
            className="HomePage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
  );
};

export default HomePage;