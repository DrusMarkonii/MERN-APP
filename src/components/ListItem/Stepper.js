// import React, {useState} from 'react';
// import './style.css'

// function Stepper(props) {

//     const [count, setCount] = useState(1)

//     const decrement = () => {
//         if (count > 1) {
//             setCount(count - 1)
//             props.onCheckIngredient(checked, props.ingredientName, count - 1)
//         }

//     }

//     const increment = () => {
       
//         setCount(count + 1)
//         props.onCheckIngredient(checked, props.ingredientName, count + 1)
       

//     }


// return (
//     <div className='product-list'>
//         {props.ingredientName}
//         <input type="checkbox" checked={checked} onChange={handelClick} />
//         {checked ? 
//             <div className='control-panel'>
//                 <button onClick={decrement}>-</button>
//                 <span> {count} </span>
//                 <button onClick={increment}>+</button>
//             </div>: 
//             null}
//     </div>
// )
// }
// export default Stepper