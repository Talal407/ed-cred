
import Footer from '@/components/common/Footer';
import RateHeader from '@/components/common/RateHeader';
import Navbar from '@/components/Landing/Navbar';
import FeedbackRatings from '@/components/School/Rating';
import SchoolInformationForm from '@/components/School/SchoolInfoForm';
import React from 'react'

const SchoolReviewPage = () => {
    return (
        <>
            <Navbar />
            <RateHeader
                title='Review Your School'
                description='Please Rate Each Item on a Scale of 1 - 5 Apples. Top Rating = 5 Apples Your review will be posted anonymously unless you expressly tell us otherwise'
            />
            <SchoolInformationForm />
            <FeedbackRatings />
            <Footer />
        </>
    )
}

export default SchoolReviewPage;
