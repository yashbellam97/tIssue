import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
    return (
        <div className="d-flex justify-content-center">
            <Form id="signup-form">
                <h2 className="text-center mb-5">Sign up</h2>
                <Form.Group controlId="signupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" required />
                </Form.Group>
                <Form.Group controlId="signupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" required />
                </Form.Group>
                <Form.Group controlId="signupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="username@example.com" required />
                </Form.Group>
                <Form.Group controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" required />
                </Form.Group>
                <Form.Group controlId="signupConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" required />
                </Form.Group>
                <br />
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </div>
                <br />
                <div className="text-center mt-3">
                    <a href="">Have an account? Log in!</a>
                </div>
            </Form>
        </div>
    );
}

export default Signup;