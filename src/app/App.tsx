import React, { useEffect } from 'react';
import './App.css';

import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

import { Outlet } from 'react-router-dom';
import { Gradient } from 'whatamesh';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(true );

  useMediaQuery(
      {
          query: '(prefers-color-scheme: dark)'
      },
      undefined,
      (isSystemDark) => setDarkMode(isSystemDark)
  );

  useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
  }, [isDarkMode]);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient');
  }, [isDarkMode])
  
  return (
    <div className="app">
      <Nav isDarkMode={isDarkMode} handleDarkMode={({ target }: any) => setDarkMode(target.checked)} />
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
