import React from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <div className="d-flex justify-content-center my-5">
            <Form className="p-5">
                <h2 className="text-center mb-5">Login</h2>
                <Form.Group controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="username@example.com" />
                </Form.Group>
                <Form.Group controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" />
                </Form.Group>
                <br />
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </div>
                <br />
                <div className="text-center mt-3">
                    <a href="">Don't have an account? Sign up!</a>
                    <br />
                    <a href="" className="text-danger d-inline-block mt-2">Forgot Password?</a>
                </div>
            </Form>
        </div >
    );
}

export default Login;