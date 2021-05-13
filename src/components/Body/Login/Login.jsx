import React, { useState } from 'react'
import { Card, Button, Container, Form, Image } from "react-bootstrap"
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'
import './Login.css'
import logo from '../../../assets/logo.png'

export default function Login() {
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState('')
    let history = useHistory()
    let auth = false


    const getUsers = async () => {
        const response = await Axios.get('https://varplayerapi.herokuapp.com/user')
		setUsers(response.data);
	};

    getUsers()

    const login = (e) => {
        e.preventDefault()
        users.forEach(user => {
            if ( (username === user.username || username === user.email) && password === user.password) {
                auth = true
                history.push('/home')
            }
        });
        if (!auth) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User or Password incorrect!',
                confirmButtonColor: '#ff0000',
              })
        }
        
        
    }

        return (
            <div className="loginContainer d-flex justify-content-center align-items-center">
                <style type="text/css">
                    {`
                    .btn-login {
                    background-color: red;
                    color: white;
                    opacity: 1;
                    width: 10em;
                    border-radius:30px;
                    }
                    `}
                </style>
                    <Container>
                        <Card className="loginCard text-center">
                                    <Card.Body>
                                        <Card.Title className="title-content">Log in:</Card.Title>
                                        <Form onSubmit={login}>
                                            <Form.Group controlId="username" className="content">
                                                <Form.Label>Username or Email</Form.Label>
                                                <Form.Control type="text" placeholder="Username or Email" required onChange={e=>setUser(e.target.value)}/>
                                            </Form.Group>
                                            <Form.Group controlId="password" className="content">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <Button variant="login" type="submit">
                                                Login
                                            </Button>
                                        </Form>
                                        <Card.Subtitle className="mb-2 text-muted p-3">Don't you have an account yet? <Link to="/" className="signup"> Sign up</Link></Card.Subtitle>
                                    </Card.Body>
                        </Card>
                    </Container>
            </div>
        );
    }
