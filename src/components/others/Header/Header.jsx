import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='main-nav' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='text-white fw-bolder'>Bangla<span className='logo-food'>Foods</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/'>Home</Nav.Link>

                            <Nav.Link href='/blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link> <FaUserCircle></FaUserCircle> </Nav.Link>
                            <Link to="/login">
                            <Button variant="outline-dark">Login</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;