import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TermsOFUse from '@/components/Termsofuse/TermsOfUse';
import Navbar from '@/components/Landing/Navbar';

const TermsOfUsePage = () => {
    return (
        <>
        <div className='w-full overflow-x-hidden'>
            <Navbar />
            <Header
                title='Terms Of Use'
                description='Join us in shaping a more transparent, accountable, and growth-oriented educational experience for all.'
            />
            <TermsOFUse/>
            <Footer/>
            </div>
        </>
    )
}

export default TermsOfUsePage;
