import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Home from '../Home'

function Body() {
    return (
        <section>
            <Switch>
                <Route path="/" component={Signup} exact/>
                <Route path="/login" component={Login} exact />
                <Route path="/home" component={Home} exact />
                <Route path="*"><div className='container'>404 Not Found</div></Route>
            </Switch>
        </section>
    )
}

export default Body
