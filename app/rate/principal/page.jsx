import Footer from '@/components/common/Footer';
import RateHeader from '@/components/common/RateHeader';
import Navbar from '@/components/Landing/Navbar';
import PrincipalInformation from '@/components/Principle/PrincipalInfo';
import FeedbackRatings from '@/components/Principle/Rating';
import React from 'react'

const PrincipalPage = () => {
    return (
        <>
            <Navbar />
            <RateHeader
                title='Rate My Principal'
                description='Your Director Report will be posted anonymously unless you expressly tell us otherwise'
            />
            <PrincipalInformation />
            <FeedbackRatings />
            <Footer/>
        </>
    )
}

export default PrincipalPage;
