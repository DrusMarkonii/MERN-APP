import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate = useNavigate()

    const handlerClick = () => {
        navigate('all_cards')
    }

    const fetchReq = () => {
        fetch('http://localhost:5000/api/all_cards/try')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
  });
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={fetchReq}>Req</button>

            <button onClick={handlerClick}>Show all cards</button>
        </div>
    )
}
