import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
            <footer className='py-5 mt-5' style={{ backgroundColor: "#F06C22", color: "white" }}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5>Contact Us</h5>
                            <p>Phone: 01990003443</p>
                            <p>Email: banglafoods@gmail.com</p>
                        </Col>
                        <Col md={4}>
                            <h5>Thank You</h5>
                            <p>We are realy glad to see you visiting our website. in this website we have tried our best to describe about our native foods. so you can get idea about our foods and even by seeing the cooking method you can cook our foods now</p>
                        </Col>
                        <Col md={4}>
                            <h5>Find Us</h5>
                            <p>Location: House No: 34, Sector No: 07, Road No: 12. Banani, Dhaka Bangladesh</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    );
};

export default Footer;