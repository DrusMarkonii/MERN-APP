import React from 'react'
import './style.css'
import Card from './card/card'
import Button from './button/button'
import Input from './input/Input'
import Paragraph from '../paragraph/Paragraph'
import Squares from './squares/Squares'




function Content() {
    
       
    return (
        <div className='content'>
            <div className='cards'>
                <Card
                    id="1"
                    title="Color jacket"
                    price="500"
                    color="red"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
                <Card
                    id="2"
                    title="Black pants"
                    price="400"
                    color="black"  
                    img="https://icdn.lenta.ru/images/2019/09/17/20/20190917204247528/square_320_e691d2e5b00249a23c77157d95c2a783.jpg"
                />
                <Card
                    id="3"
                    title="White undershirt"
                    price="300"
                    color="yellow"  
                    img="https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C51WOyO6pERL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png"
                />
                <Card
                    id="4"
                    title="Color jacket"
                    price="500"
                    color="red"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
                <Card
                    id="5"
                    title="Color jacket"
                    price="500"
                    color="green"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
            </div>
            <div className='button-item'>
                <Button className="button"/>
            </div>
            <div className='input-item'>
                <Input type="text" placeholder="first name" />
            </div>
            <div>
                <Paragraph />
            </div>
            <div>
                <Squares />
            </div>
            
            

            
        </div>
    )
}

export default Content