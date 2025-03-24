import DirectorInterview from "./DirectorInterview";

const FeedbackRatings = () => {
    const feedbackItems = [
        "Fair",
        "Genuine",
        "Flexible",
        "Consistent",
        "Transparent",
        "A Person of Integrity ",
        "A Person who acts with Respect",
        "Overall Rating",
        "Check the correct Statement",
    ];

    return (
        <div className="lg:py-15 py-10">
            <div className="lg:w-6xl lg:mx-auto mx-4 bg-white shadow-2xl rounded-lg lg:p-10 p-5">
                <h2 className="lg:text-xl text-sm font-semibold text-center mb-4">Characteristics Displayed by this Director</h2>
                <div className="space-y-2">
                    {feedbackItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between lg:text-lg text-sm bg-[#F7F7F7] p-3 rounded-md">
                            <span className="w-2/3">{item}</span>
                        </div>
                    ))}
                </div>
                <DirectorInterview/>
            </div>
        </div>
    );
};

export default FeedbackRatings;
