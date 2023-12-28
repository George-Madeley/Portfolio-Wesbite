import React, { useEffect } from 'react';
import './App.css';

import Nav from '../components/nav/Nav';
import Home from "../pages/home/Home";
import { Gradient } from 'whatamesh';

function App() {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient');
  }, [])
  
  return (
    <div className="app">
      <Nav />
      <Home />
      <div className='gradient-container'>
        <canvas className='gradient' id='gradient'></canvas>
      </div>
    </div>
  );
}

export default App;
