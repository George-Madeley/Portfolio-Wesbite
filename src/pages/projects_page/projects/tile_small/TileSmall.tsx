import React from 'react'
import './TileSmall.css'

import thumbnail from '../../../../img/code-thumbnail.png'

export default function TileSmall() {
    const languages = ['TypeScript', 'React', 'HTML', 'CSS'];

    return (
        <div className='small-tile'>
            <img src={thumbnail} alt='thumbnail' />
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
        </div>
    )
}
