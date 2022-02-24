import React from 'react';
import './MCard.css';

export default function MCard({src,title,description,price}) {
  return (
    <div className='card'>
    <img src={src} alt=''/>
    <div className='card-info'>
    <h2>{title}</h2>
    <h4>{description}</h4>
    <h3>{price}</h3></div>
    
    </div>
  )
}
