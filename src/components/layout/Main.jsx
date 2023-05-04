import React from 'react';
import Header from '../others/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../others/Footer/Footer';
import { Container, Spinner } from 'react-bootstrap';

const Main = () => {
    const spinner = <Spinner animation="grow"></Spinner>
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {navigation.state === 'loading' ? <Container><div className='text-center mt-5'>{spinner}</div></Container> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Main;