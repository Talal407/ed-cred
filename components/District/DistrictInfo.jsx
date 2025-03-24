const DistrictInformation = () => {
    return (
        <div className="lg:pt-15 pt-10">
            <div className="lg:w-6xl lg:mx-auto mx-4 bg-white shadow-2xl rounded-lg lg:p-10 p-5">
                <h2 className="lg:text-xl text-base font-semibold text-center lg:mb-10 py-5">Districts Information</h2>
                <div className="space-y-2">

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">Districts name</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>


                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">Country</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>


                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">Dates I am / I was at this Districts</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>


                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">What is / was yearly salary range for teachers in US dollars?</label>
                        <div className="flex lg:w-1/3 space-x-2">
                            <span className="p-2 border  border-white bg-white rounded-md">$</span>
                            <input type="text" className="w-1/3 p-2 border  border-white bg-white rounded-md outline-none" />
                            <span className="p-2">To</span>
                            <input type="text" className="w-1/3 p-2 border  border-white bg-white rounded-md outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DistrictInformation;
