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
            const year = repo.updated_at.substring(0, 4)
            const isPublic = repo.visibility === "public"
            const languageList = Object.keys(languages)
            let commitsCount = 0
            try {
              commitsCount = numberOfCommits.reduce(
                (acc: number, curr: any) => acc + curr.total, 0
              )
            } catch {
              commitsCount = 0
            }
            const newRepo = {
              "id": repo.id,
              "name": repo.name,
              "description": repo.description,
              "html_url": repo.html_url,
              "stargazers_count": repo.stargazers_count,
              "forks_count": repo.forks,
              "watchers_count": repo.watchers_count,
              "updated_at": year,
              "isPublic": isPublic,
              "languages": languageList,
              "commits_count": commitsCount
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
        <p className='visibility'>Visibility</p>
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
              isPublic={repo.isPublic}
              link={repo.html_url}
              linkText={`${repo.name}.git`}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              watchers={repo.watchers_count}
              commits={repo.commits_count}
              isSelected={selectedTile === `${repo.id}`}
              handleChange={handleTileSelect}
            >
              <h5>
                Description
              </h5>
              <p>
                {
                  repo.description ?
                  repo.description :
                  'No description provided.'
                }
              </p>
            </Tile>
          )
        })
      }
    </div>
  )
}
