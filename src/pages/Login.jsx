import { useContext, useState } from "react";
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    function login() {
        const isCorrectUsername = username === "haris@sigmaschool.co"
        const isCorrectPassword = password === "1234"
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234")
            navigate('/dashboard')
        }
    }

    return (
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter you Email" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <Form.Text className="text-muted">We&apos;ll never give your email to anyone else, or NOTTT HAHAHA</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter you Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={login}>Login</Button>

            </Form>
        </Container>
    )
}