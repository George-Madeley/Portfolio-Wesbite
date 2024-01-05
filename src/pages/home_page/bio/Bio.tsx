import React, { useEffect } from 'react';
import './Bio.css';

import json from '../../../data/home_page.real.json';

export default function Bio() {
  const [bio, setBio] = React.useState<any[]>([])

  useEffect(() => {
    setBio(json.bio)
  }, [bio])

  return (
    <div className="bio">
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
