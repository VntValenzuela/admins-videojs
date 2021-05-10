import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert} from "react-bootstrap"
import './UserForm.css'
import { Route } from 'react-router-dom';

function UserForm(props) {

    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setConfirmation] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const postUser = e => {
        e.preventDefault()
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: email,
            password: password,
            username: username
         })
        };

        if(password == password2){
            setError(false);
            fetch("https://varplayerapi.herokuapp.com/user",requestOptions)
            .then(res => res.json)
            .then(data => console.log(data))
            .catch(err => console.log(err))
            setSuccess(true);
        } else {
            setSuccess(false);
            setError(true);
        }
        
    };

    return (
        <form onSubmit={postUser}>
            <Alert show={error} variant="danger">Password is not the same</Alert>
            <Alert show={success} variant="success">User Registered Successfully!</Alert>
            <dl>
                <dt>
                    <label for="exampleInputEmail1">Email address</label>
                </dt>
                <dd>
                    <input onChange={e => setEmail(e.target.value)} type="email" required placeholder="example@gmail.com"/>
                </dd>
            </dl>
            <dl>
                <dt className="email-label">
                    <label for="exampleInputEmail1">Password</label>
                </dt>
                <dd>
                    <input onChange={e => setPassword(e.target.value)} type="password" required placeholder="password"/>
                </dd>
            </dl>
            <dl>
                <dt>
                    <label for="exampleInputEmail1">Confirm Password</label>
                </dt>
                <dd>
                    <input onChange={e => setConfirmation(e.target.value)} type="password" required placeholder="confirm password"/>
                </dd>
            </dl>
            <dl>
                <dt>
                    <label for="exampleInputEmail1">Username</label>
                </dt>
                <dd>
                    <input onChange={e => setUser(e.target.value)} type="text" required placeholder="watcher"/>
                </dd>
            </dl>
            <dl>
                <button className="Register" type="submit">Register</button> 
                <span>or</span> 
                <Route render={({history}) => (
                    <button className="Login" onClick={() => history.push("/login")}>Login</button>
                )}>
                </Route>
            </dl>
            

        </form>
    )
}

export default UserForm