import React from 'react';
import Header from '../../others/Header/Header';
import Footer from '../../others/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='orange text-center fs-1 mt-5'>Page Not Found</h2>
                <img style={{width: '50%', height: '600px'}} src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=996&t=st=1683190893~exp=1683191493~hmac=eb7bf60e4e272ce0ed1322e2b4cd0460b1d2ca2f20ab7046e20df272465dbd9b" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;