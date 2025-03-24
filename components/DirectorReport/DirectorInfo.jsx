const DirectorInformation = () => {
    return (
        <div className="lg:pt-15 pt-10">
            <div className="lg:w-6xl lg:mx-auto mx-4 bg-white shadow-2xl rounded-lg lg:p-10 p-5">
                <h2 className="lg:text-xl text-base font-semibold text-center lg:mb-10 py-5">Director Information</h2>
                <div className="space-y-2">

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] lg:py-3 py-3 pb-14 px-3 rounded-md">
                        <div>
                            <label className="w-2/3 lg:text-lg text-sm ">Director's name</label>
                            <p className="text-[#686C70] lg:text-sm text-xs lg:max-w-xl w-full py-1 ">If the person you are reviewing is not the school director, tell us their exact position in order for this review to post. Enter this information following the person's name.
                            </p>
                        </div>
                        <input type="text" className=" absolute p-2 lg:w-86 w-70 lg:mx-175 border  border-white bg-white rounded-md outline-none" />
                    </div>

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className=" w-2/3 lg:text-lg text-sm">Reporting Period</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">School Name / Country</label>
                        <input type="text" className="lg:w-1/3 w-full p-2  placeholder-[#D9D9D9] border-white bg-white rounded-md outline-none" placeholder="Please spell complete name " />
                    </div>

                    <div className="lg:flex lg:items-center  bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">School Web Site</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DirectorInformation;
