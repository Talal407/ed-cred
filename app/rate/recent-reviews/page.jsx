import React from 'react';
import RateHeader from '@/components/common/RateHeader';
import Navbar from '@/components/Landing/Navbar';


const RecentReviews = () => {
    return (
        <>
            <Navbar />
            <RateHeader
                title='Most Recent Reviews'
                description='Please Rate Each Item on a Scale of 1 - 10. Top Rating = 10. Your review will be posted anonymously unless you expressly tell us otherwise'
            />
        </>
    )
}

export default RecentReviews;