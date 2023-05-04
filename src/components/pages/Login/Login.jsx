import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Header from "../../others/Header/Header";
import Footer from "../../others/Footer/Footer";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login submission
    };

    return (
        <div>
            <Header></Header>
            <Container className="mt-3 p-3 bg-light rounded">
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2>Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Login
                            </Button>
                        </Form>

                        <div className="mt-4">
                            <Button variant="outline-primary" className="me-2">
                                <FaGoogle /> Log in with Google
                            </Button>
                            <Button variant="outline-dark">
                                <FaGithub /> Log in with GitHub
                            </Button>
                        </div>

                        <div className="mt-4">
                            Don't have an account?
                            <Link style={{ color: '#F06C22', textDecoration: 'none' }} to="/register">Register now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Login;
