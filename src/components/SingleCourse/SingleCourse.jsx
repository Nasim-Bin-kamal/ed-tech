import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './SingleCourse.css';

const SingleCourse = ({ course }) => {
    const history = useNavigate();
    const { courseId, courseName, price, image, description, rating } = course || {};

    const handleBookingPackage = (id) => {
        history.push(`/packages/booking/${id}`);
    }
    return (
        <div>
            <Col className="mx-auto">
                <Card className="mx-auto my-3 p-0 rounded-3">
                    <div className="img-body">
                        <Card.Img className="img-fluid w-100 card-img" variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <div className="d-flex justify-content-between fs-5 text-secondary">
                            <h3 className="text-dark">${price}</h3>

                        </div>
                        <Card.Title className='courseTitle'>{courseName}</Card.Title>

                        <div className="d-flex justify-content-between align-items-center">
                            <p><i className="fas fa-star pt-3"></i> <span className="text-secondary">{rating} Superb</span></p>
                            <Button onClick={() => handleBookingPackage(courseId)} className="border-0  btn-book" variant="light"><i className="far fa-check-circle"></i> Order Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;