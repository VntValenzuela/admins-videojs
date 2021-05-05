import React, { useState } from 'react'
import { Card, Button, Container, Form } from "react-bootstrap"
import Axios from 'axios'
// import './Login.css'

export default function Login() {
    const [userName, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const register = async(e) => {
        e.preventDefault()
        const newUser = {userName, password, email}
        // const response = await Axios.post('http:')
        // console.log(response)
        console.log("Saving: ")
        console.log(newUser)
    }

        return (
            <Container>  
                <Card>
                    <Form onSubmit={register}>
                        <Form.Group controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={e=>setUser(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card>
            </Container>
        );
    }
