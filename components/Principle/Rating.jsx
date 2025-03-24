import Management from "./ManagementStyle";

const FeedbackRatings = () => {
    const feedbackItems = [
        "Fair & equitable with all staff",
        "Good listener, easily approachable",
        "Provides disciplinary support",
        "Displays effective leadership",
        "Delegates responsibility well",
        "Demonstrates curriculum knowledge",
        "Fosters positive, supportive climate",
        "Strong ability to relate to kids",
        "Overall rating",
        "Check the correct statement:",
    ];

    return (
        <div className="lg:py-15 py-10">
            <div className="lg:w-6xl lg:mx-auto mx-4 bg-white shadow-2xl rounded-lg lg:p-10 p-5">
                <h2 className="lg:text-xl text-sm font-semibold text-center mb-4">Characteristics Displayed by this Principal</h2>
                <div className="space-y-2">
                    {feedbackItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between lg:text-lg text-sm bg-[#F7F7F7] p-3 rounded-md">
                            <span className="w-2/3">{item}</span>
                        </div>
                    ))}
                </div>
                <Management/>
            </div>
        </div>
    );
};

export default FeedbackRatings;
