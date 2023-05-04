import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import './SingleChef.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const SingleChef = ({ chef }) => {
    const { id, num_recipes, profile_image, title, total_likes, years_of_experience } = chef;
    return (
        <div>
            <Card className="mb-3">
                <Row>
                    <Col md={4}>
                        <LazyLoad>
                            <Image className='rounded' src={profile_image} fluid />
                        </LazyLoad>
                    </Col>
                    <Col md={4} className='chef-card-details'>
                        <Card.Body>
                            <Card.Title className='orange fs-1'>{title}</Card.Title>
                            <Card.Text>
                                <h5>Years of Experience:</h5>
                                <p className='orange'>{years_of_experience}</p>
                                <h5>Numbers of Recipes:</h5>
                                <p className='orange'>{num_recipes}</p>
                                <h5>Likes:</h5>
                                <p className='orange'>{total_likes}</p>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4} className='chef-card-details'>
                        <Card.Body>
                            <Link to={`/chefs/${id}`}> <Button variant="outline-secondary">View Recipes</Button> </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default SingleChef;