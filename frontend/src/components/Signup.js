import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import validationSchema from "../validationSchema";

function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const [signupError, setSignupError] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [redirectToNextPage, setRedirectToNextPage] = useState(false);

    const handleSubmit = (values) => {
        setIsLoading(true);
        setSignupError("");
        setShowErrorAlert(false);

        axios.post('http://localhost:5000/api/users/', {
            name: {
                first: values.firstName,
                last: values.lastName
            },
            username: values.username,
            password: values.password
        })
            .then((response) => {
                console.log(response);
                setIsLoading(false);
                setRedirectToNextPage(true);
            })
            .catch((error) => {
                setSignupError("Sorry, an error occurred. Please check your connection and try again.");

                if (error.response) {
                    setSignupError(error.response.data);
                    if (error.response.data.includes("E11000"))
                        setSignupError("Username already exists. Please try another one.");
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
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => handleSubmit(values)
    });

    return (
        redirectToNextPage ?
            <Redirect to="/" />
            :
            <div className="d-flex justify-content-center">
                <Form id="signup-form" noValidate onSubmit={formik.handleSubmit}>
                    <h2 className="text-center mb-5">Sign up</h2>

                    <Alert variant="danger" show={showErrorAlert} onClose={() => setShowErrorAlert(false)} dismissible>
                        <p>{signupError}</p>
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

                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            isValid={formik.touched.firstName && !formik.errors.firstName}
                            isInvalid={formik.touched.firstName && formik.errors.firstName}
                        />
                        {
                            formik.touched.firstName &&
                            <>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.firstName}
                                </Form.Control.Feedback>
                            </>
                        }
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Doe"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            isValid={formik.touched.lastName && !formik.errors.lastName}
                            isInvalid={formik.touched.lastName && formik.errors.lastName}
                        />
                        {
                            formik.touched.lastName &&
                            <>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.lastName}
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

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="••••••••"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
                            isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        {
                            formik.touched.confirmPassword &&
                            <>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.confirmPassword}
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
                                Sign up
                            </Button>
                        }
                    </div>
                    <br />
                    <div className="text-center mt-3">
                        <Link to="/login">Have an account? Log in!</Link>
                    </div>
                </Form>
            </div >
    );
}

export default Signup;