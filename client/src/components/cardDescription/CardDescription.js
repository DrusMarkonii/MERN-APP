import React from 'react'
import Card from '../card/Card'

export default function CardDescription(props) {


    function handlerDeleteClick() {

    }

    console.log()
    return (
        <div>
            <Card />
            <button onClick={handlerDeleteClick}>Delete Data</button>
        </div>
    )
}
