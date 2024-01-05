import React from 'react'
import './AboutPage.css'

import Heading from '../../components/heading/Heading'
import Description from './description/Description'
import Timeline from './timeline/Timeline'

export default function AboutPage() {
  return (
    <div className='about-page'>
      <Heading>
        <div className='heading-content'>
          <h1>About Me</h1>
        </div>
      </Heading>
      <Description />
      <Timeline />
    </div>
  )
}
