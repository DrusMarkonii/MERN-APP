import React from 'react'
import './style.css'

function Footer() {
    
    const currentDate = new Date()
       
    return (
        <div className='footer'>
            <p>Copyright {currentDate.getFullYear()}</p>
        </div>
    )
}

export default Footer