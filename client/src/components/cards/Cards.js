import React from 'react'
import Card from '../card/Card'
import './style.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cards() {

    const [cards, setCards] = useState([])
    const navigate = useNavigate()
    
    function fetchNow() {
        fetch('http://localhost:5000/api/all_cards/')
        .then( response => {
            return response.json();
        })
        .then((data) => {
           setCards(data);
        })
    }

    fetchNow()

    
    const handlerClick = (e) => {
        const id = e.target.id
        console.log('Click has been on', id)
        navigate(`/card/${id}`)
    }
   
    return (
        <div className="cards-container">
           {cards.map((item, index) => <Card key={index} name={item.name} id={item.name} onHandelClick={handlerClick} {...item}/>)}
        </div>
    )
}
