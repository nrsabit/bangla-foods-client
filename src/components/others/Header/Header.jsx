import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar className='main-nav' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='text-white fw-bolder'>Bangla<span className='logo-food'>Foods</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link-item">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                        </Nav>
                        <Nav>
                            {user ? <Nav.Link className='user-profile-icon'>
                                <FaUserCircle></FaUserCircle>
                                <p className='user-profile-name mb-0 ms-3'>{user.displayName}</p>
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