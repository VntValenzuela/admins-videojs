import React, { useState } from 'react'
import { Card, Button, Container, Form } from "react-bootstrap"
import Axios from 'axios'
import Swal from 'sweetalert2'
// import './Login.css'

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
                text: 'User or Password incorrect!'
              })
        }
        
        
    }

        return (
            <Container>  
                <Card>
                    <Container>
                        <Form onSubmit={login}>
                            <Form.Group controlId="username">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username or Email" onChange={e=>setUser(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        );
    }
