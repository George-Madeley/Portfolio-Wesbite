import React, { useEffect, useRef, useState } from 'react'
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Card(props: any) {
    const [isReadMoreVisible, setReadMoreVisible] = useState(false);

    const contentTextRef = useRef<HTMLDivElement>(null);
    const contentTextInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentTextRef.current) {
            const contentHeight = contentTextRef.current.offsetHeight;
            const contentInnerHeight = contentTextInnerRef.current?.offsetHeight;
            if (contentInnerHeight && contentHeight < contentInnerHeight) {
                setReadMoreVisible(true);
            }
        }
    }, []);


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
                    <input type='checkbox' id={`read-more-${props.id}`} name='read-more' />
                    <div className='content-text' ref={contentTextRef}>
                        <div className='content-text-inner' ref={contentTextInnerRef}>
                            {
                                props.children
                            }
                        </div>
                    </div>
                    <div className='label-container' style={{display: isReadMoreVisible ? 'block' : 'none'}}>
                        <label htmlFor={`read-more-${props.id}`}>
                            <span>Read More</span>
                            <span>Read Less</span>
                        </label>
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
