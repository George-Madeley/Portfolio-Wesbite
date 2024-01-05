import React from 'react'
import './Hero.css'

import portrait from '../../../img/hero.png';

import Socials from './socials/Socials'
import Heading from '../../../components/heading/Heading';
import Bio from './bio/Bio';

export default function Hero() {

  return (
    <header className='hero'>
      <Heading>
        <div className='heading-content'>
          <p>The Portolio of</p>
          <h1>George Madeley</h1>
        </div>
      </Heading>
      <div className='hero-image-container'>
        <img className='hero-image' src={portrait} alt='George Madeley' />
      </div>
      <Bio />
      <Socials />
    </header>
  )
}
