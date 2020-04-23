import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            becon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const 
    }

    removeIngredientHandler = (type) =>{
        
    }
    render() {
        return (
            <Aux>
                <div>burger</div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Aux>
        )
    }
}
