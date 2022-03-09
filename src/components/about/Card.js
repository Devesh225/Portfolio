import React from 'react'
import './Card.css';

function Card( { Icon, Title, Text }) {
  return (
    <div className='card'>
        <Icon className='card__icon'/>
        <h3>{Title}</h3>
        <p>{Text}</p>
    </div>
  )
}

export default Card