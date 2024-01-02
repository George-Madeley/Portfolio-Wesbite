import React from 'react';
import './Highlights.css'

import json from '../../../data/home_page.real.json'

import { getRepo, getLanguages } from '../../../api/github';

import Tile from './tile/Tile';

import Heading from '../../../components/heading/Heading';

export default function Highlights() {
  const [repos, setRepos] = React.useState<any[]>([])

  React.useEffect(() => {
    Promise.all(
      json.repos.map((repo: any) => {
        return getRepo(repo.owner, repo.name).then((repoDetails) => {
          return Promise.all([
            getLanguages(repo.owner, repo.name)
          ]).then(([languages]) => {
            const languageList = Object.keys(languages)
            const newRepo = {
              "id": repoDetails.id,
              "name": repoDetails.name,
              "description": repoDetails.description,
              "html_url": repoDetails.html_url,
              "languages": languageList,
            }
            return newRepo;
          });
        })
      })
    ).then((reposWithDetails) => {
      setRepos(reposWithDetails);
    })
  }, [repos])


  return (
    <div className='highlights'>
      <Heading>
        <h2>Top Projects</h2>
      </Heading>
      <span className='tile-container'>
        {
          repos.map((repo) => {
            return (
              <Tile
                key={repo.id}
                name={repo.name}
                description={repo.description}
                link={repo.html_url}
                languages={repo.languages}
              />
            )
          })
        }
      </span>
    </div>
  )
}
