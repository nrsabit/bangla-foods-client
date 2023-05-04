import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const [favourite, setFavourite] = useState(false)
    const {title, rattings, ingredients, cooking_method, description, image} = recipe;
    const handleFavourite = ()=> {
        setFavourite(true)
        toast('Favourite Item Added')
    }
    return (
        <Col md={4} className='mb-3'>
            <Card>
                <Card.Img variant="top" src={image} style={{height: '300px'}}/>
                <Card.Body>
                    <Card.Title className='orange'>{title}</Card.Title>
                    <h5>Rattings: </h5>
                    <p className='orange'>{rattings}</p>
                    <h5>Description: </h5>
                    <p className='orange'>{description}</p>
                    <h5>Ingredients: </h5>
                    {ingredients.map(ing => <p key={ing}>{ing}</p>)}
                    <h5>Cooking Method: </h5>
                    <p>{cooking_method}</p>
                    {favourite ? <button style={{border: 'none', background: 'white', border: 'none'}} disabled><BsFillBookmarkFill></BsFillBookmarkFill></button> : <button style={{border: 'none', background: 'white', border: 'none'}} onClick={handleFavourite}><BsFillBookmarkFill></BsFillBookmarkFill></button>}
                    <ToastContainer />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipe;