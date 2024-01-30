import React from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;