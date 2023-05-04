import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Header.css'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    const tooltip = (
        <Tooltip id="tooltip">
            {user?.displayName}
        </Tooltip>
    );
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
                            {user && <Nav.Link> <OverlayTrigger placement="bottom" overlay={tooltip}>
                                <FaUserCircle></FaUserCircle>
                            </OverlayTrigger> </Nav.Link>}
                            {user || <Link to="/login">
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