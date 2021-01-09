import React from "react";
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand as={Link} to="/">tIssue</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Projects</Nav.Link>
                </Nav>
                <Nav variant="pills" className="justify-content-end">
                    <Nav.Item>
                        <Button as={Link} to="/login" variant="secondary" className="my-1 mr-1">Log in</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button as={Link} to="/signup" variant="primary" className="my-1">Sign up</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;