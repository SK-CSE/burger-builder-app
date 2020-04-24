
import React from 'react'
import classes from './OrderSummary.css'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return (
                <li key = {igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey} : {props.ingredients[igKey]}</span>
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            {ingredientSummary}
            <p>Continue to Checkout..??</p>
        </Aux>
    )
}
export default orderSummary;