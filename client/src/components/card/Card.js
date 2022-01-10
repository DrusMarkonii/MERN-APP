import React from 'react'
import './style.css'



export default function Card(props) {
       
    // const [card, setCard] = useState([])
    // console.log(props.name)
    
    // function fetchNow() {
    //     fetch('http://localhost:5000/api/all_cards/card/:id')
    //     .then( response => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //        setCard(data);
    //     })
    // }

    // fetchNow()

    
    return (
    
        <div className='card-form' onClick={props.onHandelClick} id={props.id}>
            <div className='card-name'>
                <p>{props.name}</p>
            </div>
            <div className='card-description'>
                <p>{props.descriptionText}</p>
            </div>
            <div className='card-drugType'>
                <p>{props.drugType}</p>
            </div>
            
        </div>
        
    )
}
