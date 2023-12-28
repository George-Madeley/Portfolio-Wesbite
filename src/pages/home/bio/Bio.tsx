import React from 'react';
import './Bio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Bio() {
  return (
    <div className="bio">
      <div className='bio-bg'>
        <FontAwesomeIcon icon={faUser} className="bio-icon"/>
      </div>

      <span className="bio-info">
        <div className='bio-text'>
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
      </span>
    </div>
  )
}
