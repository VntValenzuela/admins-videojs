import React, { useState } from 'react'
import { Card, Button, Container, Form } from "react-bootstrap"
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Register() {
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setConfirmation] = useState('')
    const [email, setEmail] = useState('')

    const register = async(e) => {
        e.preventDefault()
        if (password === password2) {
        const newUser = {username, password, email}
        // const response = await Axios.post('https://varplayerapi.herokuapp.com/user', newUser)
        // console.log(response)
        console.log("Saving: ")
        console.log(newUser)
        Swal.fire({
            icon: 'success',
            title: 'Registered Succesfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Both Passwords must match!'
              })
        }
        
    }

        return (
            <Container>  
                <Card>
                    <Container>
                        <Form onSubmit={register}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" required onChange={e=>setUser(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required onChange={e=>setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required onChange={e=>setConfirmation(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        );
    }
