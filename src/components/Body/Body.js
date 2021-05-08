import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'

function Body() {
    return (
        <section>
            <Switch>
                <Route path="/" component={Signup} exact/>
                <Route path="/login" component={Login} exact />
            </Switch>
        </section>
    )
}

export default Body
