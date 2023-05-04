import React from 'react';
import Header from '../others/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../others/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;