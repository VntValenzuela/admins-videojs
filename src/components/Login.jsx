import React, { useState } from 'react'
import { Card, Button, Container, Form, Image } from "react-bootstrap"
import Axios from 'axios'
import Swal from 'sweetalert2'
import './Login.css'
import logo from '../assets/logo.png'

export default function Login() {
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')

    const login = async(e) => {
        e.preventDefault()
        if (username === password) {
            // const response = await Axios.get('https://varplayerapi.herokuapp.com/user')
            // console.log(response)
            console.log("logged")
        }
        else {
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
                <Image src={logo} className="topleft"/>
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
                                                <Form.Control type="text" placeholder="Username or Email" onChange={e=>setUser(e.target.value)}/>
                                            </Form.Group>
                                            <Form.Group controlId="password" className="content">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <Button variant="login" type="submit">
                                                Login
                                            </Button>
                                        </Form>
                                        <Card.Subtitle className="mb-2 text-muted p-3">Don't you have an account yet? <a className="signup">Sign up</a></Card.Subtitle>
                                    </Card.Body>
                        </Card>
                    </Container>
            </div>
        );
    }
