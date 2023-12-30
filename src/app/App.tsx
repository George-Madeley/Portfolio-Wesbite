import React, { useEffect } from 'react';
import './App.css';

import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

import { Outlet } from 'react-router-dom';
import { Gradient } from 'whatamesh';

function App() {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient');
  }, [])
  
  return (
    <div className="app">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className='gradient-container'>
        <canvas className='gradient' id='gradient'></canvas>
      </div>
    </div>
  );
}

export default App;
