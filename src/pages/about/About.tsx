import React from 'react'
import './About.css'

import Heading from '../../components/heading/Heading'
import Description from './description/Description'
import Timeline from './timeline/Timeline'

export default function About() {
  return (
    <div className='about-page'>
      <Heading>
        <h1>About Me</h1>
      </Heading>
      <Description />
      <Timeline />
    </div>
  )
}
