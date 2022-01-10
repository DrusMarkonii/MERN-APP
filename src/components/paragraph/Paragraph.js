import React, {useState} from 'react';
import './style.css'

function Paragraph() {
    
    const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


    const [visibility, setVisibility] = useState(true)
    
    
    function handleClick() {
        setVisibility(!visibility)
    }
    
    if(visibility) {
        return (
            <div className='paragraph'>
            <button className='paragraph-button' onClick={handleClick}>Hide</button>
            <p>{textContent}</p>
        </div> 
        )
    }

    return (
        <div className='paragraph'>
        <button className='paragraph-button' onClick={handleClick}>Show</button>
        <p></p>
        </div>
    )
        

   

    
    
    

}

export default Paragraph