import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../HomePage';
import Footer from '../Footer';
import Dashboard from '../Dashboard';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
        <Dashboard/>
      </main>
    
    </div>
  );
};

export default Layout;