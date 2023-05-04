import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Header from "../../others/Header/Header";
import Footer from "../../others/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => navigate(from))
            .catch(error => setError(error.message))
    };
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => navigate(from))
        
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(res => navigate(from))
    }

    return (
        <div>
            <Header></Header>
            <Container className="mt-3 p-3 bg-light rounded">
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2>Login</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email" required
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password" required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Login
                            </Button>
                        </Form>

                        <div className="mt-4">
                            <Button variant="outline-primary" className="me-2" onClick={handleGoogleSignIn}>
                                <FaGoogle /> Log in with Google
                            </Button>
                            <Button variant="outline-dark" onClick={handleGithubSignIn}>
                                <FaGithub /> Log in with GitHub
                            </Button>
                        </div>

                        <div className="mt-4">
                            Don't have an account?
                            <Link style={{ color: '#F06C22', textDecoration: 'none' }} to="/register">Register now</Link>
                        </div>
                        <p className="text-danger">{error}</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Login;
