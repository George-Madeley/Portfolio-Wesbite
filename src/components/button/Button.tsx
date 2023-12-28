import React from 'react'
import './Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props: any) {
  return (
    <a className='button' href={props.link} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon className='button-icon' icon={props.icon} />
        <p className='button-text'>
            {props.text}
        </p>
    </a>
  )
}
