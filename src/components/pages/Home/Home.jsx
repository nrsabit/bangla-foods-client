import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import SingleChef from '../../others/SingleChef/SingleChef';

const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            {/* Homepage Banner */}
            <Container className='mt-4 bg-light p-3 rounded'>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className='rounded' src="https://madscookhouse.com/wp-content/uploads/2020/12/Hyderabadi-Kacchi-Chicken-Dum-Biryani.jpg" fluid />
                    </Col>
                    <Col xs={12} md={6} className='banner-headings'>
                        <h2 className='orange fs-1 mt-3'>Welcome to BanglaFoods</h2>
                        <h4>You will get the best Bengali foods here.</h4>
                        <p className='p-4'>In this website, we have coosed only bengali chefs, and we have 6 top notch chefs here. and we can see their amazing and delicius recipies and details.</p>
                    </Col>
                </Row>
            </Container>

            {/* Chefs Section  */}
            <Container className='mt-4 p-4 bg-light rounded'>
                <h2 className='orange fs-1 mt-3 fs-1 my-3 text-center'>Our Chefs</h2>
                {chefs && chefs.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)}
            </Container>

            {/* Top foods Section  */}
            <Container className='mt-4 bg-light p-3 rounded'>
                <h2 className='orange fs-1 mt-3 fs-1 my-3 text-center'>Top Foods</h2>
                <Row>
                    <Col md={4} className='mb-3'>
                        <Card>
                            <Card.Img className='top-food-img' variant="top" src="https://rumkisgoldenspoon.com/wp-content/uploads/2021/08/Shorshe-ilish.jpg"/>
                            <Card.Body>
                                <Card.Title className='orange'>Shorshe Ilish</Card.Title>
                                <Card.Text>
                                    A popular Bengali dish made with Hilsa fish and mustard sauce.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <Card>
                            <Card.Img className='top-food-img' variant="top" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Mutton_Rezala_.jpg"/>
                            <Card.Body>
                                <Card.Title className='orange'>Mutton Rezala</Card.Title>
                                <Card.Text>
                                    A flavorful Bengali mutton curry made with yogurt and a variety of spices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <Card>
                            <Card.Img className='top-food-img' variant="top" src="https://twinklingtinacooks.com/wp-content/uploads/2021/04/chingri-malaikari-bengali-recipe-prawn-coconut-milk.jpg"/>
                            <Card.Body>
                                <Card.Title className='orange'>Chingri Malaikari</Card.Title>
                                <Card.Text>
                                    A delicious Bengali prawn curry made with coconut milk.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;