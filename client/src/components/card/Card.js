import React from 'react'
import './style.css'

export default function Card(props) {
    return (
    
        <div className='card-form'>
            <div className='card-name'>
                <p>name</p>
            </div>
            <div className='card-description'>
                <p>description</p>
            </div>
            <div className='card-drugType'>
                <p>drugType</p>
            </div>
            <div className='card-delete'>
                <button id={props.id} onClick={props.onHandelClick}>Delete</button>
            </div>
        </div>
        
    )
}
