import React from 'react'
import './Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props: any) {
  return (
    <a className='button' href={props.link}>
        <p className='button-icon'>
            <FontAwesomeIcon icon={props.icon} />
        </p>
        <p className='button-text'>
            {props.text}
        </p>
    </a>
  )
}
