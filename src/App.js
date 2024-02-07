import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <main>
          <HomePage/>
          <nav>
            {/* Use Link component for declarative navigation <Link to="/HomePage">Home Page</Link> */} 

          </nav>
        </main>
        <div style = {{
            minHeight: "400px",
            color: "green",
        }}>
          <Routes>
            <Route exact path="/HomePage" component={HomePage} />
            <Route path="/Dashboard" component={Dashboard} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

