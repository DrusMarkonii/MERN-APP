import React from 'react'
import "./style.css"

function Header(props) {

    return (
        <div className='header'>
            <h1 className='header-title'>{props.title}</h1>
            <img  alt="logoImg" src={props.logoImg} className='header-logo-img'/>
        </div>
    )

}

export default Header