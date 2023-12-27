import React from 'react'
import './Socials.css'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import Button from '../button/Button'

export default function Socials() {
  return (
    <div className='hero-socials'>
        <div className='button-container'>
            <Button link='https://github.com/George-Madeley' icon={faGithub} text='Github' />
        </div>
        <div className='button-container'>
            <Button link='https://www.linkedin.com/in/georgemadeleybathcompsyseng' icon={faLinkedin} text='LinkedIn' />
        </div>
    </div>
  )
}
