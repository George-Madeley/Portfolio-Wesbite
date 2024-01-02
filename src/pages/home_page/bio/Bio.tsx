import React, { useEffect } from 'react';
import './Bio.css';

import json from '../../../data/home_page.real.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Bio() {
  const [bio, setBio] = React.useState<any[]>([])

  useEffect(() => {
    setBio(json.bio)
  }, [bio])

  return (
    <div className="bio">
      <div className='bio-bg'>
        <FontAwesomeIcon icon={faUser} className="bio-icon"/>
      </div>

      <span className="bio-info">
        <div className='bio-text'>
          {
            bio.map((paragraph: any, index: number) => {
              return (
                <p key={index}>{paragraph}</p>
              )
            })
          }
        </div>
      </span>
    </div>
  )
}
