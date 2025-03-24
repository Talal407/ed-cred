const PrincipalInformation = () => {
    return (
        <div className="lg:pt-15 pt-10">
            <div className="lg:w-6xl lg:mx-auto mx-4 bg-white shadow-2xl rounded-lg lg:p-10 p-5">
                <h2 className="lg:text-xl text-base font-semibold text-center lg:mb-10 py-5">Principal Information</h2>
                <div className="space-y-2">

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">Principal's Name & Division</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none placeholder-[#D9D9D9]" placeholder="Example: John Doe - Middle School" />
                    </div>


                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">Reporting Period</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>


                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">School Name / Country</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none placeholder-[#D9D9D9]" placeholder="Please: NO abbreviations / acronyms" />
                    </div>

                    <div className="lg:flex lg:items-center bg-[#F7F7F7] p-3 rounded-md">
                        <label className="w-2/3 lg:text-lg text-sm">School Web Site</label>
                        <input type="text" className="lg:w-1/3 w-full p-2 border border-white bg-white rounded-md outline-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalInformation;
