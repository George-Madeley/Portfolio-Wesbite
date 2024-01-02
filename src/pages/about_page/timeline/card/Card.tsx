import React from 'react'
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Card(props: any) {
    return (
        <div className='timeline-card-container'>
            <div className='timeline-card'>
                <div className='date'>
                    <p>{props.time}</p>
                </div>
                <div className='content'>
                    <h2>{props.position}</h2>
                    {
                        props.companyLink ? (
                            <a className='company-name' href={props.companyLink}>
                                <h3>{props.company}</h3>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        ) : (
                            <div className='company-name'>
                                <h3>{props.company}</h3>
                            </div>
                        )
                    }
                    <div className='content-text'>
                        {
                            props.children
                        }
                    </div>
                    <ul className='project-links'>
                        {
                            props.links.map((link: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <a href={link.url} target='_blank' rel='noopener noreferrer'>
                                            <FontAwesomeIcon icon={faLink} />
                                            <p>{link.name}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='language-list'>
                        {
                            props.languages.map((language: any, index: number) => {
                                return (
                                    <li key={index}>{language}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
