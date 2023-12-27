import React from 'react'
import './Hero.css'

import portrait from '../../../img/hero.png';

import Socials from './socials/Socials'
import Heading from './heading/Heading';
import Bio from './bio/Bio';

export default function Hero() {

  return (
    <header className='hero'>
      <div className='hero-container'>
        <Heading />
        <div className='hero-image-container'>
          <img className='hero-image' src={portrait} alt='George Madeley' />
        </div>
        <Bio />
        <Socials />
      </div>
    </header>
  )
}
