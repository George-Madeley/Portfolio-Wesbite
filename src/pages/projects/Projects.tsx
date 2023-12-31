import React from 'react'
import './Projects.css'

import Heading from '../../components/heading/Heading'
import Description from './description/Description'

export default function Projects() {
  return (
    <div className='projects-page'>
      <Heading>
        <h1>Projects</h1>
      </Heading>
      <Description />
    </div>
  )
}
