import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        console.log(newPrice)
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})

    }

    removeIngredientHandler = (type) =>{
        
    }
    render() {
        return (
            <Aux>
                <div>burger</div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded = {this.addIngredientHandler}/>
            </Aux>
        )
    }
}