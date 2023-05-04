import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';

const Chef = () => {
    const chef = useLoaderData()
    const { id, num_recipes, description, profile_image, title, total_likes, years_of_experience, recipes } = chef;
    return (
        <div>
            {/* Chef Banner  */}
            <Container className="mt-3 p-3 bg-light rounded">
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={profile_image} alt="Chef Image" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        <div className="text-center text-md-left">
                            <h2 className='orange'>{title}</h2>
                            <p>{description}</p>
                            <h5>Total Likes: </h5>
                            <p className='orange'>{total_likes}</p>
                            <h5>Number of Recipes: </h5>
                            <p className='orange'>{num_recipes}</p>
                            <h5>Years of Experience: </h5>
                            <p className='orange'>{years_of_experience}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Chef Recipes  */}
            <Container className="mt-3 p-3 bg-light rounded">
            <h2 className='orange fs-1 mt-3 fs-1 my-3 text-center'>Recipes</h2>
                <Row>
                    {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)}
                </Row>
            </Container>
        </div>
    );
};

export default Chef;