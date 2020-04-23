import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>
            toolbar, sidebar, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )

export default Layout
