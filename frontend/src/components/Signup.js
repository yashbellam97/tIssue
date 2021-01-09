import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
    const [signupUsername, setSignupUsername] = useState("");
    const [signupFirstName, setSignupFirstName] = useState("");
    const [signupLastName, setSignupLastName] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const [redirectToNextPage, setRedirectToNextPage] = useState(false);

    const handleSignupUsernameChange = (event) => setSignupUsername(event.target.value);
    const handleFirstNameChange = (event) => setSignupFirstName(event.target.value);
    const handleLastNameChange = (event) => setSignupLastName(event.target.value);
    const handleSignupPasswordChange = (event) => setSignupPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(signupUsername);
        console.log(signupFirstName);
        console.log(signupLastName);
        console.log(signupPassword);

        setRedirectToNextPage(true)
    }

    return (
        redirectToNextPage ?
            <Redirect to="/" />
            :
            <div className="d-flex justify-content-center">
                <Form id="signup-form" onSubmit={handleSubmit}>
                    <h2 className="text-center mb-5">Sign up</h2>
                    <Form.Group controlId="signupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="johndoe" onChange={handleSignupUsernameChange} value={signupUsername} required />
                    </Form.Group>
                    <Form.Group controlId="signupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="John" onChange={handleFirstNameChange} value={signupFirstName} />
                    </Form.Group>
                    <Form.Group controlId="signupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Doe" onChange={handleLastNameChange} value={signupLastName} />
                    </Form.Group>
                    <Form.Group controlId="signupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" onChange={handleSignupPasswordChange} value={signupPassword} required />
                    </Form.Group>
                    <Form.Group controlId="signupConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="••••••••" onChange={handleSignupPasswordChange} value={signupPassword} required />
                    </Form.Group>
                    <br />
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Sign up
                    </Button>
                    </div>
                    <br />
                    <div className="text-center mt-3">
                        <Link to="/login">Have an account? Log in!</Link>
                    </div>
                </Form>
            </div>
    );
}

export default Signup;