import React from 'react'
import {Link} from 'react-router-dom'
import UserForm from './RegisterUserForm/UserForm'
import './Signup.css'


function Signup() {
    return (
        <div className="main_page">
            <div className="contents">
                <div className="message">
                    <h1>Welcome</h1>
                    <h2>To<span> VAR </span>Player</h2>
                    <p>
                        Search for your favorite movies and watch them for free!
                    </p>
                    <p>
                        Create a new account to get started or if you already have an account, Login!
                    </p>
                </div>
                <div className="registerform">
                    <h1>Create <span>Account</span></h1>
                    <UserForm/>
                </div>
            </div>
        </div>
    )
}

export default Signup
