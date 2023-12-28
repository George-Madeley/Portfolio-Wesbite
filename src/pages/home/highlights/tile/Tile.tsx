import React from 'react'
import './Tile.css'

import thumbail from '../../../../img/code-thumbnail.png'
import Button from '../../../../components/button/Button';


export default function Tile() {
    const languages = ['TypeScript', 'React', 'HTML', 'CSS'];

    return (
        <div className='tile'>
            <img src={thumbail} alt='thumbnail' />
            <div className='language-container'>
                {languages.map((language, index) => {
                    return (
                        <div key={index} className='language'>
                            <p>{language}</p>
                        </div>
                    )
                })}
            </div>
            <p className='title'>Title</p>
            <p className='description'>Officia cillum culpa anim cupidatat eiusmod elit sint deserunt fugiat ad cillum Lorem amet.</p>
            <div className='button-container'>
                <Button link='' icon='code' text='Learn More' />
            </div>
        </div>
    )
}
