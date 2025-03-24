

import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import Feedbacklist from "@/components/review-listing/Filter";
import ListReviews from "@/components/review-listing/list"
const Reviewlist = () => {
    return (
        <div>
        <div className=' w-screen h-screen flex'>
            <SideBar />
            <div className='flex flex-col flex-grow w-full h-full'>
                <TopBar/>
                <div className=' p-10 gap-10 flex flex-col'>
                    <Route/>
                    <Feedbacklist/>

                </div>
                <ListReviews/>
            </div>
            
        </div>
      
        </div>
    )
};
const Route = () => {
    return (
        <div className='font-semibold text-4xl'>
            Feedback Listings
            <br />
            <div className='text-xl font-[500]'>{"Feedbacks > Feedback Listings"}</div>
        </div>
    )
}

export default Reviewlist;