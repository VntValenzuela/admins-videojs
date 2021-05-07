import React, { useState } from 'react'
import { Card, Button, Container, Form, Image} from "react-bootstrap"
import Axios from 'axios'
import Swal from 'sweetalert2'
import './Register.css'
import logo from '../assets/logo.png'

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
                text: 'Both Passwords must match!',
                confirmButtonColor: '#ff0000',
              })
        }
        
    }

        return (
            <div className="registerContainer d-flex justify-content-center align-items-center">
                <Image src={logo} className="topleft"/>
                <style type="text/css">
                    {`
                    .btn-register {
                    background-color: red;
                    color: white;
                    opacity: 1;
                    width: 10em;
                    border-radius:30px;
                    }
                    `}
                </style>
                <Container>
                    <Card className="registerCard text-center">
                            <Card.Body>
                                <Card.Title className="title-content">Please Register:</Card.Title>
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
                                    <Button variant="register" type="submit">
                                        Register
                                    </Button>
                                </Form>
                                <Card.Subtitle className="mb-2 text-muted p-3">You have an account already? <a className="register">Sign In</a></Card.Subtitle>
                            </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
