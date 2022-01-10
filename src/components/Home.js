import React from 'react'

export default function Home(props) {
    
    const user = JSON.parse(localStorage.getItem('user'))
    
    let userShow =  user.userEmail || 'незнакомец'

   
    return (
        <div>
            <h1> Добро пожаловать {userShow} !</h1>
        </div>
    )
}
