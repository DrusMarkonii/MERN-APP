import React from 'react';


function CitiesList(props) {
    
    return ( 
        <ul>
            {props.cities.map((city, index) => <li key={index} onClick={() => props.onSelectCity(index)}>{city.name} ({city.description})</li>)}

        </ul>
    )
}

export default CitiesList