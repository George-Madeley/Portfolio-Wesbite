import React from 'react';
import './Highlights.css'

import Tile from './tile/Tile';

import Heading from '../../../components/heading/Heading';

export default function Highlights() {
  return (
    <div className='highlights'>
      <Heading>
        <h2>Top Projects</h2>
      </Heading>
      <span className='tile-container'>
        <Tile />
        <Tile />
        <Tile />
      </span>
    </div>
  )
}
