import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate = useNavigate()

    const handlerClick = () => {
        navigate('all_cards')
    }

    return (
        <div>
            <h1>HomePage</h1>

            <button onClick={handlerClick}>Show all cards</button>
        </div>
    )
}
