import React, { useEffect } from 'react';
import './Heading.css'

import { Gradient } from 'whatamesh'

export default function Heading() {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#hero-gradient');
  }, [])

  return (
    <div className='hero-header'>
      <h1 className='hero-heading'>
        <p>The Portfolio of</p>
        <p>George Madeley</p>
      </h1>
      <div className='hero-gradient-container'>
        <canvas className='hero-gradient' id='hero-gradient'></canvas>
      </div>
      <div className='hero-heading heading-overlay heading-burn'>
        <p>The Portfolio of</p>
        <p>George Madeley</p>
      </div>
      <div className='hero-heading heading-overlay'>
        <p>The Portfolio of</p>
        <p>George Madeley</p>
      </div>
    </div>
  )
}
