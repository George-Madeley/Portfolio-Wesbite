import React from 'react';
import './Highlights.css'

import json from '../../../content/home_page.real.json'

import { getRepo, getLanguages } from '../../../api/github';

import Tile from './tile/Tile';
import LoadingTile from './loading_tile/LoadingTile';
import ErrorTile from './error_tile/ErrorTile';

import Heading from '../../../components/heading/Heading';

export default function Highlights() {
  const [tileContent, setTileContent] = React.useState<any[]>([])
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
          }, (error: Error) => {
            console.error(error ?? "Error occured");
            const newRepo = {
              "isError": true as boolean,
              "message": error.message,
              }
              return newRepo;
          });
        })
      })
    ).then((responseData: any) => {
      setTileContent(responseData);
      setLoading(false);
    }, (error: Error) => {
      console.log(error);
      console.error(error ?? "Error occured");
      setTileContent([{
        "isError": true as boolean,
        "message": error.message
        }]);
      setLoading(false);
    });
  }, [])


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
          tileContent.map((repo: any, index: number) => {
            if (repo.isError) {
              return (
                <ErrorTile
                  key={index}
                  message={repo.message}
                />
              )
            }
            return (
              <Tile
                key={index}
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
