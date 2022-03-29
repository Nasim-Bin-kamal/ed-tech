import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';
import courses from '../../assets/courses/courses.json';

const BestPackages = () => {
    // const [courses, setCourses] = useState([]);
    // const { loading } = useAuth();

    // useEffect(() => {
    //     fetch('/src/assets/courses/courses.json')
    //         .then(res => res.json())
    //         .then(data => setCourses(data));
    // }, []);
    // if (loading) {
    //     return (
    //         <div className="d-flex justify-content-center my-5 loading">
    //             <Spinner className="" animation="grow" variant="danger" />
    //             <Spinner className="" animation="grow" variant="warning" />
    //             <Spinner className="" animation="grow" variant="success" />
    //         </div>
    //     )
    // }

    return (
        <div className="packages-section py-5">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Choose Courses From Here</h5>
                    <h2 className="text-secondary fw-bold">Select Your Desired Course</h2>
                </div>
                <div className="mx-auto my-5">
                    <Row xs={1} md={2} lg={3}>
                        {
                            courses?.map(course => <SingleCourse key={course.courseId} course={course} />)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default BestPackages;