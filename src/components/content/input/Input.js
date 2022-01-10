import React from 'react';
import './style.css'

function Input(props) {
    

    return (
        <div className='input-group'>
            <div>
                <input className='input' type={props.type} placeholder={props.placeholder} value={props.value}/>
            </div>
        </div>
    )
}

export default Input