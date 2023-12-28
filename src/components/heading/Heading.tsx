import React from 'react';
import './Heading.css'

export default function Heading(props: any) {

  return (
    <div className='heading-container'>
      <div className="heading-bg">
        <div className='heading-visible'>
          {props.children}
        </div>
      </div>
      <div className='heading-invisible'>
        {props.children}
      </div>
      <div className='heading-visible'>
        {props.children}
      </div>
      <div className='heading-visible'>
        {props.children}
      </div>
    </div>
  )
}
