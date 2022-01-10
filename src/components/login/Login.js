import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function FormLogin() {
    const [inputValue, setInputValue] = useState({
        userName: '',
        email: '',
        psw: ''
       
    })
    

    const userName = inputValue.userName
    const email = inputValue.email
    const password = inputValue.psw

    const handlerChange = (e) => {
        const {name, value} = e.target
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    
    
    const navigate = useNavigate()


    function handlerSubmit(e) {
        e.preventDefault()
        const userLoginEmail = JSON.parse(localStorage.getItem(userName)).userEmail
        const userLoginPassword = JSON.parse(localStorage.getItem(userName)).userPassword

        if(userLoginEmail === email && userLoginPassword === password) {
            console.log('well done')
            navigate('/')
            
        } else {
            
            alert('Доступ закрыт')
        }
        

      
        
    }

    return (
        <div>
           <form onSubmit={handlerSubmit} action="/home" style={{"border": "1px solid #ccc"}}>
                <div className='container'>
                    <h1>Авторизация</h1>
                    <div>
                        <p>Пожалуйста, заполните эту форму, чтобы войти в учетную запись.</p>
                    </div>
                    <div>
                        <b>User Name</b>
                        <input onChange={handlerChange} type="text" placeholder="Введите ваш User Name" name="userName" required />
                    </div>
                    <div>
                        <b>Email</b>
                        <input onChange={handlerChange} type="text" placeholder="Введите вашу почту" name="email" required />
                    </div>
                    <div>
                        <b>Пароль</b>
                        <input onChange={handlerChange} type="password" placeholder="Введите пароль" name="psw" required />
                    </div>
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Войти</button>
                    </div>
                    
                </div>
           </form>
            
        
            
        </div>
    )
}
