import React, { useEffect } from 'react'
import './Projects.css'

import { getRepos, getLanguages, getNumberOfCommits } from '../../../api/github'

import Tile from './tile/Tile'

export default function Projects() {
  const [selectedTile, setSelectedTile] = React.useState('' as string)

  const [repos, setRepos] = React.useState([] as any[]);

  const handleTileSelect = (event: any) => {
    if (event.target.checked) {
      setSelectedTile(event.target.id)
      return
    }
    setSelectedTile('')
  }

  useEffect(() => {
    getRepos().then((repos) => {
      Promise.all(
        repos.map((repo: any) => {
          return Promise.all([
            getLanguages(repo.owner.login, repo.name),
            getNumberOfCommits(repo.owner.login, repo.name)
          ]).then(([languages, numberOfCommits]) => {
            const newRepo = {
              "id": repo.id,
              "name": repo.name,
              "description": repo.description,
              "html_url": repo.html_url,
              "stargazers_count": repo.stargazers_count,
              "updated_at": repo.updated_at.substring(0, 4),
              "languages": Object.keys(languages),
              "commits_count": numberOfCommits[0].total
            }
            return newRepo;
          });
        })
      ).then((reposWithDetails) => {
        console.log(reposWithDetails);
        setRepos(reposWithDetails);
      });
    });
  }, [])

  return (
    <div className='projects'>
      <div className='table-header'>
        <p className='date'>Year</p>
        <p className='title'>Project</p>
        <p className='languages'>Languages</p>
        <p className='link'>Link</p>
      </div>
      {
        repos.map((repo: any, index: number) => {
          return (
            <Tile
              key={index}
              id={repo.id}
              date={repo.updated_at}
              name={repo.name.replace(/-/g, ' ')}
              languages={repo.languages}
              link={repo.html_url}
              linkText={`${repo.name}.git`}
              stars={repo.stargazers_count}
              commits={repo.commits_count}
              isSelected={selectedTile === `${repo.id}`}
              handleChange={handleTileSelect}
            >
              <h4>
                Description
              </h4>
              <p>
                {repo.description}
              </p>
            </Tile>
          )
        })
      }
    </div>
  )
}
