import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopBanner from '../../components/TopBanner/TopBanner';
import Courses from '../../components/Courses/Courses';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div>

            <Header />
            <TopBanner />
            <Courses />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;