import React from 'react';
import './App.css';

import Nav from '../components/nav/Nav';
import Home from "../pages/home/Home";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
