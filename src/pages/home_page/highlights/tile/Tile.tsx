import React from 'react'
import './Tile.css'

import thumbail from '../../../../img/code-thumbnail.png'
import Button from '../../../../components/button/Button';


export default function Tile(props: any) {
    return (
        <div className='tile'>
            <div className='content-container'>
                <img src={thumbail} alt='thumbnail' />
                <div className='language-container'>
                    {
                        props.languages.map((language: string, index: number) => {
                            return (
                                <div key={index} className='language'>
                                    <p>{language}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h5 className='title'>{props.name}</h5>
                <p className='description'>{props.description}</p>
            </div>
            <div className='button-container'>
                <Button link={props.link} icon='code' text='Learn More' />
            </div>
        </div>
    )
}
