import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../others/Footer/Footer";
import Header from "../../others/Header/Header";

const Register = () => {
    const { createUser,updateUserDetails } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => result.user)
        .catch(error => error.message)
        updateUserDetails(name, photo)
    };

    return (
        <div>
            <Header></Header>
            <Container className="mt-3 p-3 bg-light rounded">
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <h2>Register</h2>
                        <Form onSubmit={handleRegister}>
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

                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                />
                            </Form.Group>

                            <Form.Group controlId="photoUrl">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the URL of your profile photo"
                                    name="protoUrl"
                                />
                            </Form.Group>

                            <Button className="mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        <div className="mt-4">
                            Already have an account?
                            <Link style={{color: '#F06C22', textDecoration: 'none'}} to="/login">Login now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Register;
