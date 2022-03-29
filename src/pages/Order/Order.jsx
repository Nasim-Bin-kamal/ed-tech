import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';

const Order = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [courses] = useCourses([]);
    const course = courses?.find(course => course.courseId === id) || {};

    const handleBackToServices = () => {
        navigate('/');
    }

    return (
        <div className="my-5">
            <Container className="w-75">
                <h3 className="my-5">Full Details of <span className="text-primary">{course?.courseName}</span></h3>
                <Row className="border border-3 rounded-3 shadow-lg">
                    <Col md={4}>
                        <Card className="mx-auto my-3">
                            <Card.Img className="img-fluid" variant="top" src={course?.image} />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <h3>Service Name: {course?.courseName}</h3>
                            <h4>Course Rating: {course?.rating}</h4>
                            <Card.Text>
                                <b>course Description:</b> {course?.description}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Button
                    onClick={handleBackToServices}
                    className="mx-auto d-flex align-items-center my-3"
                    variant="outline-success"
                    size="md"
                ><i className="fas fa-arrow-left pe-2"></i>Back To Courses</Button>
            </Container>


        </div>
    );
};

export default Order;