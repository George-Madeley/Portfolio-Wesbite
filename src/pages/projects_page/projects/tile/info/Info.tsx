import React from 'react'
import './Info.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLink, faArrowRight, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

export default function Info(props: any) {
  return (
    <div className='info-container'>
        <input type='checkbox' id={props.id} checked={props.isSelected} onChange={(e) => props.handleChange(e)}/>
        <label htmlFor={props.id} className='icon-container'>
            <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <p className='date'>{props.date}</p>
        <h4 className='title'>{props.name}</h4>
        <a className='title-link' href={props.link} target='_blank' rel='noreferrer'>
            <p>{props.name}</p>
            <div className='icon-container'>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </a>
        <ul className='language-container'>
            {props.languages.map((language: string, index: number) => {
                return (
                    <li key={index} className='language'>
                        {language}
                    </li>
                )
            })}
        </ul>
        <div className='visibility'>
            {
                props.isPublic ? 
                <div className='public'>
                    <FontAwesomeIcon icon={faLockOpen} />
                    <p>Public</p>
                </div>
                :
                <div className='private'>
                    <FontAwesomeIcon icon={faLock} />
                    <p>Private</p>
                </div>
            }
        </div>
        <a href={props.link} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLink} />
            <p>{props.linkText}</p>
        </a>
    </div>
  )
}
