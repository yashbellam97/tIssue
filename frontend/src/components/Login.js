import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from 'axios';

import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { loginSchema } from "../validationSchema";

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [redirectToNextPage, setRedirectToNextPage] = useState(false);

    const handleSubmit = (values) => {
        setIsLoading(true);
        setLoginError("");
        setShowErrorAlert(false);

        axios.post('http://localhost:5000/api/auth/login', {
            username: values.username,
            password: values.password
        })
            .then((response) => {
                if (response.data.username) {
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("isLoggedIn", response.data.isLoggedIn);
                } else if (response.data.includes("Username doesn't exist") ||
                    response.data.includes("Incorrect password")) {
                    throw new Error(response.data);
                }
                setIsLoading(false);
                setRedirectToNextPage(true);
            })
            .catch((error) => {
                setLoginError("Sorry, an error occurred. Please check your connection and try again.");
                if (error.response) {
                    setLoginError(error.response.data);
                } else {
                    setLoginError("Username or password incorrect. Please try again.");
                }
                setShowErrorAlert(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => handleSubmit(values)
    });

    return (
        redirectToNextPage ?
            <Redirect to="/" />
            :
            <div className="d-flex justify-content-center">
                <Form id="login-form" noValidate onSubmit={formik.handleSubmit}>
                    <h2 className="text-center mb-5">Log in</h2>

                    <Alert variant="danger" show={showErrorAlert} onClose={() => setShowErrorAlert(false)} dismissible>
                        <p>{loginError}</p>
                    </Alert>

                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="johndoe"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            isValid={formik.touched.username && !formik.errors.username}
                            isInvalid={formik.touched.username && formik.errors.username}
                        />
                        {
                            formik.touched.username &&
                            <>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.username}
                                </Form.Control.Feedback>
                            </>
                        }
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="••••••••"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            isValid={formik.touched.password && !formik.errors.password}
                            isInvalid={formik.touched.password && formik.errors.password}
                        />
                        {
                            formik.touched.password &&
                            <>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>
                            </>
                        }
                    </Form.Group>

                    <br />

                    <div className="text-center">
                        {isLoading
                            ?
                            <Spinner animation="grow" variant="primary" />
                            :
                            <Button variant="primary" type="submit">
                                Log in
                            </Button>
                        }
                    </div>
                    <br />
                    <div className="text-center mt-3">
                        <Link to="/signup">Don't have an account? Sign up!</Link>
                        <br />

                        <Link to="/login" className="text-danger d-inline-block mt-2">Forgot Password?</Link>
                    </div>
                </Form>
            </div>
    );
}

export default Login;