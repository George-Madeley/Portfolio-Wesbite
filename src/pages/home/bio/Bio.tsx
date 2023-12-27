import React, { useEffect } from 'react';
import './Bio.css';

import { Gradient } from 'whatamesh';

export default function Bio() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#bio-gradient');
  }, [])

  return (
    <div className="bio">
      <span className="bio-info">
        <div className="bio-text">
          <p>Hi, I'm <strong>George</strong>.</p>
          <p>
            I'm a student studying an integrated Master's of Engineering in
            Computer Systems Engineering at the University of Bath. (Aug 2022)
          </p>
          <p>
            With interests in full-stack development and artificial
            intelligence.
          </p>
          <p>
            You can find me optimizing my code for many projects, building and
            repairing computers, or even playing video games during my free time.
          </p>
        </div>
        <div className='bio-stats'>
        </div>
      </span>
      <div className='bio-gradient-container'>
        <canvas className='bio-gradient' id='bio-gradient'></canvas>
      </div>
    </div>
  )
}
