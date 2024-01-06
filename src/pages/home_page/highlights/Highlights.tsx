import React from 'react';
import './Highlights.css'

import json from '../../../data/home_page.real.json'

import { getRepo, getLanguages } from '../../../api/github';

import Tile from './tile/Tile';
import LoadingTile from './loading_tile/LoadingTile';

import Heading from '../../../components/heading/Heading';

export default function Highlights() {
  const [repos, setRepos] = React.useState<any[]>([])
  const [isLoading, setLoading] = React.useState<boolean>(true)

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
      setLoading(false);
    })
  }, [repos])


  return (
    <div className='highlights'>
      <Heading>
        <div className='heading-content'>
          <h2>Top Projects</h2>
        </div>
      </Heading>
      <span className='tile-container'>
        {
          isLoading ? 
          <>
            <LoadingTile />
            <LoadingTile />
            <LoadingTile />
          </> :
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
