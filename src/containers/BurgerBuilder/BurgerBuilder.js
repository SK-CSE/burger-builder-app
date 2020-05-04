import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICES = {
    salad: 5,
    vegtikki: 8,
    cheese: 10,
    chicken: 13
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            vegtikki: 0,
            cheese: 0,
            chicken: 0
        },
        totalPrice : 40,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients)=>{
        const sum = Object.keys(ingredients)
            .map((igKey)=>{
                return ingredients[igKey]
            })
            .reduce((sum, el)=> {
                return sum + el;
            }, 0)
        this.setState({purchasable: sum > 0})    
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        console.log(newPrice)
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = ()=>{
        this.setState({purchasing: true})
    }

    purchaseCloseHandler = ()=>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = ()=>{
        alert('yeah..!')
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed = {this.purchaseCloseHandler}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients} 
                        purchaseCanceled = {this.purchaseCloseHandler}
                        purchaseContinued = {this.purchaseContinueHandler}
                        price = {this.state.totalPrice.toFixed(2)}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                purchasable = {this.state.purchasable}
                price = {this.state.totalPrice}
                ordered = {this.purchaseHandler}
                />
            </Aux>
        )
    }
}
