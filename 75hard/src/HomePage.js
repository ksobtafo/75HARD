// HomePage.js
import React from 'react';
import logo from './logo.svg';
import demo from './demo.png';

const HomePage = () => {
  return (
    <div className='Home'>
        
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