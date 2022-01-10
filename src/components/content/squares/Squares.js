import React, {useState} from 'react';
import './style.css'

function Squares() {
    const [visibility, setVisibility] = useState({
        redSquare: true,
        greenSquare: true
    })

    function handlerClick(e) {
        const square = e.currentTarget.id === 'greenSquare' ? 'redSquare' : 'greenSquare';
        setVisibility({...visibility, [e.currentTarget.id]: false, [square]: true})
  }

    if(visibility.greenSquare && visibility.redSquare) {
        return (
            <div className='squares' >
                <div className='square green-square' id='greenSquare' onClick={handlerClick}></div>
                <div className='square red-square' id='redSquare' onClick={handlerClick}></div>
            </div>
        )
    }
       

    if(visibility.greenSquare) {
        return (
            <div className='squares' >
                <div className='square green-square' id='greenSquare' onClick={handlerClick}></div>
                <div className='square red-square white-square' id='redSquare' onClick={handlerClick}></div>
            </div>
        )
    }

    if(visibility.redSquare) {
        return (
            <div className='squares' >
                <div className='square green-square white-square' id='greenSquare' onClick={handlerClick}></div>
                <div className='square red-square ' id='redSquare' onClick={handlerClick}></div>
            </div>
        )
    }
}


export default Squares
