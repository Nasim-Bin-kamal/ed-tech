import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';
import useCourses from '../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses([]);


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

export default Courses;