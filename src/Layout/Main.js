import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <Row>
                        <Col lg='2' className='d-none d-lg-block'>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg='7'>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg='3'>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;