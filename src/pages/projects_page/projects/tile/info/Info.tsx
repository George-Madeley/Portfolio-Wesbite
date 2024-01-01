import React from 'react'
import './Info.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Info(props: any) {
  return (
    <div className='info-container'>
        <input type='checkbox' id={props.id} checked={props.isSelected} onChange={(e) => props.handleChange(e)}/>
        <label htmlFor={props.id} className='icon-container'>
            <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <p className='date'>{props.date}</p>
        <p className='title'>{props.name}</p>
        <a className='title-link' href={props.link} target='_blank' rel='noreferrer'>
            <p>{props.name}</p>
            <FontAwesomeIcon icon={faArrowRight} />
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
        <a href={props.link} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLink} />
            <p>{props.linkText}</p>
        </a>
    </div>
  )
}
