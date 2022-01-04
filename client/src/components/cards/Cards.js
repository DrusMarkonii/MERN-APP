import React from 'react'
import Card from '../card/Card'
import './style.css'

export default function Cards() {

    const arr = [1,2,3,4,5]

    const handlerClick = (e) => console.log('Click has been on', e.target)
   
    return (
        <div className="cards-container">
           {arr.map((item, index) => <Card key={index} id={item} onHandelClick={handlerClick}/>)}
        </div>
    )
}
