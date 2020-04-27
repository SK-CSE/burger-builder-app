import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <div>
            toolbar, sidebar, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )

export default Layout
