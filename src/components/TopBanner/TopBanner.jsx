import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TopBanner.css';


const TopBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="banner py-5">
            <Container>
                <Row className=" d-flex justify-content-center align-items-center my-3 mx-auto">
                    <Col sm={6} md={5}>
                        <div className="text-white mx-auto">
                            <h1 className="title">Learning From Ed-Tech with Top Courses</h1>
                            <p>Take Great Online Courses AnyWhere In The World.We are serving important courses for you.Learn interesting courses with our experts.</p>
                            <Button onClick={() => navigate("/courses")} className="rounded-pill px-3 my-3" variant="danger">Get Started <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </Col>
                    <Col sm={6} md={7}>
                        <img className="img-fluid mx-auto" src="https://i.ibb.co/ZYrB78x/about-img.png" alt="bannerImage" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default TopBanner;