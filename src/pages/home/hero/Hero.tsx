import React from 'react'
import './Hero.css'

import portrait from '../../../img/hero.png';

import { Gradient } from 'whatamesh'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Button from './button/Button';

  
const gradient = new Gradient();
gradient.initGradient('#hero-gradient');


export default function Hero() {

  return (
    <header className='hero'>
      <div className='hero-container'>
        <div className='hero-header'>
          <h1 className='hero-heading'>
            <p>The Portfolio of</p>
            <p>George Madeley</p>
          </h1>
          <div className='hero-gradient-container'>
            <canvas className='hero-gradient'></canvas>
          </div>
          <div className='hero-heading heading-overlay heading-burn'>
            <p>The Portfolio of</p>
            <p>George Madeley</p>
          </div>
          <div className='hero-heading heading-overlay'>
            <p>The Portfolio of</p>
            <p>George Madeley</p>
          </div>
        </div>
        <div className='hero-image-container'>
          <img className='hero-image' src={portrait} alt='George Madeley' />
        </div>
        <div className='hero-bio'>
          <p className='hero-bio-text'>
            Masters of Computer Systems Engineering student at the University of
            Bath,
          </p>
          <p className='hero-bio-text'>
            Full Stack Developer | Machine Learning Engineer | Game Developer
          </p>
        </div>
        <div className='hero-socials'>
          <div className='button-container'>
            <Button link='' icon={faGithub} text='Github' />
          </div>
          <div className='button-container'>
            <Button link='' icon={faLinkedin} text='LinkedIn' />
          </div>
        </div>
      </div>
    </header>
  )
}
