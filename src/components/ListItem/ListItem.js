import React from 'react';
import './style.css'

function ListItem(props) {
    
    const isCounter = props.isCounter
    // const [count, setCount] = useState(0)

    

        

        // if (props.isCounter && !checked) {
        //     setCount(1)
        //     props.onCheckIngredient(!checked, props.ingredientName, count + 1)

        // } else if (props.isCounter  && checked) {
        //     setCount(0);
        //     props.onCheckIngredient(!checked, props.ingredientName, count)
        // }
        // else {
        //     !checked ? 
        //     props.onCheckIngredient(!checked, props.ingredientName, count + 1) : 
        //     props.onCheckIngredient(!checked, props.ingredientName, count) 
        // }

    

    // const decrement = () => {
    //     if (count > 1) {
    //         setCount(count - 1);
    //         props.onCheckIngredient(checked, props.ingredientName, count - 1);
    //     }

    // }

    // const increment = () => {
    //    if (count < 10 && count >= 1) {
    //     setCount(count + 1);
    //     props.onCheckIngredient(checked, props.ingredientName, count + 1);
    //    }

    // } 

   return (
        <div className='product-list'>
            {props.ingredientName}
            <input type="checkbox" onChange={(e) => props.handelChangeChecked(e, isCounter)}  />
            {props.isCounter ? 
                <div className='control-panel'>
                    <button className='btn btn-decrement' >-</button>
                    <span> {props.count} </span>
                    <button className='btn btn-increment' onClick={() => props.onIncrement(props.count + 1)}>+</button>
                </div>: 
                null}
        </div>
   )
}
export default ListItem