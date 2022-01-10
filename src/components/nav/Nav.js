import React from 'react';
import './style.css'

function Nav({sections}) {


    return (
        <div className='nav'>
            <ul className='nav-list'>
                {sections.map((item, index ) => <li key={index}><a key={index} href={item.link}>{item.title}</a></li>)}
            </ul>
        </div>
    )
}

export default Nav