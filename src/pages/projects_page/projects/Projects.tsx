import React from 'react'
import './Projects.css'

import Tile from './tile/Tile'

export default function Projects() {
  const [selectedTile, setSelectedTile] = React.useState('' as string)

  const handleTileSelect = (event: any) => {
    if (event.target.checked) {
      setSelectedTile(event.target.id)
      return
    }
    setSelectedTile('')
  }

  return (
    <div className='projects'>
      <Tile
        id='projects-1'
        date='2021'
        name='Portfolio'
        languages={['React', 'TypeScript', 'CSS', 'HTML']}
        link=''
        linkText='portfolio.com'
        stars='0'
        commits='0'
        isSelected={selectedTile === 'projects-1'}
        handleChange={handleTileSelect}
      >
        <p>
          Culpa laborum culpa cillum cillum incididunt exercitation id deserunt esse consectetur est reprehenderit. Mollit commodo esse adipisicing nostrud exercitation nostrud fugiat. Cillum cillum excepteur sunt quis laboris tempor dolore Lorem aute consequat. Ullamco ex magna voluptate adipisicing. Eu ex dolor non sit elit consequat nisi in. Mollit elit incididunt veniam aliqua cillum excepteur consectetur. Est nisi eu mollit minim culpa qui.

          Consequat aliqua cillum amet tempor et voluptate. Minim officia ex qui excepteur reprehenderit pariatur sint ea aute qui non. Amet exercitation sit nostrud laborum fugiat sint Lorem aliqua deserunt excepteur ad. Et pariatur nostrud eu sint in et sunt aliquip ullamco culpa irure et nostrud. Voluptate pariatur veniam culpa ut anim sint ut cillum occaecat anim amet dolore.
        </p>
      </Tile>
      <Tile
        id='projects-2'
        date='2021'
        name='Portfolio'
        languages={['React', 'TypeScript', 'CSS', 'HTML']}
        link=''
        linkText='portfolio.com'
        stars='0'
        commits='0'
        isSelected={selectedTile === 'projects-2'}
        handleChange={handleTileSelect}
      >
        <p>
          This is the portfolio you are currently viewing. It was created using React, TypeScript, CSS, and HTML. It is
          hosted on GitHub pages.
        </p>
      </Tile>
    </div>
  )
}
