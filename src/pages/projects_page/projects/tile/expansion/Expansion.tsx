import React from 'react'
import './Expansion.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeCommit } from '@fortawesome/free-solid-svg-icons'

export default function Expansion(props: any) {
  return (
  <div className='expansion-container'>
    <div className='expansion'>
        <div className='description-container'>
            <div className='description'>
                {props.children}
            </div>
        </div>
        <aside className='stats-container'> 
            <div className='stars-container'>
                <FontAwesomeIcon icon={faStar} />
                <p>{props.stars}</p>
            </div>
            <div className='commits-container'>
                <FontAwesomeIcon icon={faCodeCommit} />
                <p>{props.commits}</p>
            </div>
        </aside>
    </div>
  </div>
  )
}
