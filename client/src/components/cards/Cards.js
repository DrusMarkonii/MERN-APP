import React from 'react'
import Card from '../card/Card'
import './style.css'
import {useState} from 'react'

export default function Cards() {

    const [cards, setCards] = useState([])

    fetch('http://localhost:5000/api/all_cards/')
        .then( response => {
            return response.json();
        })
        .then((data) => {
           setCards(data);
        })

    // const arr = [1,2,3,4,5,5,6]

    const handlerClick = (e) => console.log('Click has been on', e.target)
   
    return (
        <div className="cards-container">
           {cards.map((item, index) => <Card key={index} id={item.id} onHandelClick={handlerClick} {...item}/>)}
        </div>
    )
}
