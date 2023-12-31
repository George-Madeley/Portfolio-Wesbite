import React from 'react'
import './ProjectsPage.css'

import Heading from '../../components/heading/Heading'
import Description from './description/Description'

export default function ProjectsPage() {
  return (
    <div className='projects-page'>
      <Heading>
        <h1>Projects</h1>
      </Heading>
      <Description />
    </div>
  )
}
