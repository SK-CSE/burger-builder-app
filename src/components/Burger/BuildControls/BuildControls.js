import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const buildControls = (props) => {
    const controls = [
        {label:"Salad", type:"salad"},
        {label:"Bacon", type:"bacon"},
        {label:"Cheese", type:"cheese"},
        {label:"Meat", type:"meat"}

    ];
    return (
        <div className={classes.BuildControls}>
            {
                controls.map(ctrl => (
                    <BuildControl key={ctrl} label={ctrl.label}/>
                ))
            }
            
        </div>
    )
}

export default buildControls;
