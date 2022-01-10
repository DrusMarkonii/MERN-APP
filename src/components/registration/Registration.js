import React, {useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './style.css'


export default function FormRegistration() {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state.form.pathname || '/main'

   

    function handlerSubmit(e) {
        e.preventDefault()

        const data = {email, pass, login};
        
        if (password !== passwordRepeat) {
            alert('Пароли не совпдают')
        } else {
            localStorage.setItem([userName], JSON.stringify({userEmail: email, userPassword: password}))
        }

        console.log(JSON.parse(localStorage.getItem(userName)).userEmail)
    
        navigate('/login')
        
        


        
        
    }

    const handlerChange = (e) => {
        const {name, value} = e.target
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    return (
        <div >
           <form onSubmit={handlerSubmit} action="/login" style={{"border": "1px solid #ccc"}}>
                <div className='container'>
                    <h1>Форма регистрации</h1>
                    <div>
                        <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
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
                    <div>
                        <b>Повторить пароль</b>
                        <input onChange={handlerChange} type="password" placeholder="Повторите пароль" name="pswRepeat"  />
                    </div>
                   
                    

                
                    {/* <label>
                        <input type="checkbox" checked="checked" name="remember" style={{"marginBottom": "15px"}} /> Запомнить меня
                    </label> */}
                    <p>Создавая учетную запись, вы соглашаетесь с нашим <Link to="/conditions" style={{"color":"dodgerblue"}}>Условия и конфиденциальность</Link>.</p>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Отменить</button>
                        <button type="submit" className="signupbtn">Регистрация</button>
                    </div>
                </div>
           </form>
            
        </div>
    )
}
