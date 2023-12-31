import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PDFExport } from '@progress/kendo-react-pdf';

const Blogs = () => {
    const pdfExportComponent = React.useRef(null);
    const handleDownloadPDF = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    return (
        <PDFExport ref={pdfExportComponent}>
            <Container className='mt-5'>
                <div className='d-flex flex-column'>
                    <h2 className='orange fs-1 mt-3 fs-1 my-3 text-center'>Questions & Answers</h2>
                    <Button onClick={handleDownloadPDF} variant="outline-dark" className='mx-auto'>Download PDF</Button>
                </div>
                <Row>
                    <Col md={12} className='mt-4 bg-light p-3 rounded'>
                        <h2>Tell us the differences between uncontrolled and controlled components.</h2>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component.  Uncontrolled components refer to components that manage their own state internally. </p>
                    </Col>
                    <Col md={12} className='mt-4 bg-light p-3 rounded'>
                        <h2>How to validate React props using PropTypes</h2>
                        <p>PropTypes is a library that allows developers to validate the types of props that are passed to a component. so the process is: we will have to import the PropTypes library, and then will have to define the proptype object, and then we will have to check our components by prop types. </p>
                    </Col>
                    <Col md={12} className='mt-4 bg-light p-3 rounded'>
                        <h2>Tell us the difference between nodejs and express js.</h2>
                        <p>The Node js is: An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable. and Express Js is: a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference.
                        </p>
                    </Col>
                    <Col md={12} className='mt-4 bg-light p-3 rounded'>
                        <h2>What is a custom hook, and why will you create a custom hook?</h2>
                        <p>The custom hook is a hook created by a react developer for reusing it, so like the internal react hooks we can use our own custom hooks easily and we can reuse it anywhere so our code will be cleaner and rendering will be more faster. </p>
                    </Col>
                </Row>
            </Container>
        </PDFExport>

    );
};

export default Blogs;