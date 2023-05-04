import React, { useContext } from 'react';
import { Button, Container, Image, Nav, NavLink, Navbar } from 'react-bootstrap';
import './Header.css'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    // const {user} = useContext(AuthContext)
    const user = 'hello'
    console.log(user)
    return (
        <div>
            <Navbar className='main-nav' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='text-white fw-bolder'>Bangla<span className='logo-food'>Foods</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({ isActive }) => {
                                isActive ? "active" : ""
                            }}>Home</NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => {
                                isActive ? "active" : ""
                            }}>Blogs</NavLink>
                        </Nav>
                        <Nav>
                            {user ? <Nav.Link>
                                <FaUserCircle></FaUserCircle>
                            </Nav.Link> :
                                <Link to="/login">
                                    <Button variant="outline-dark">Login</Button>
                                </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;