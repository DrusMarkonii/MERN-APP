import React from 'react'
import './style.css'


function Card(props) {
       const color = props.color
       

    return (
        <div className='cards' id={props.id}>
            <div className='product-item' style={{backgroundColor: color}}>
                <img src={props.img} alt={props.title}/>
                <div className="product-list">
                    <h3>{props.title}</h3>
                    <span className="price">$ {props.price}</span>
                </div>
            </div>
        </div>
        
    )

}

export default Card