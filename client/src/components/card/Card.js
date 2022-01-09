import React from 'react'
import './style.css'

export default function Card(props) {
    return (
    
        <div className='card-form'>
            <div className='card-name'>
                <p>{props.name}</p>
            </div>
            <div className='card-description'>
                <p>{props.descriptionText}</p>
            </div>
            <div className='card-drugType'>
                <p>{props.drugType}</p>
            </div>
            <div className='card-delete'>
                <button id={props.id} onClick={props.onHandelClick}>Delete</button>
            </div>
        </div>
        
    )
}
