
interface HeaderProps {
    title: string;
    description: string;
}

const RateHeader = ({ title, description }: HeaderProps) => {
    return (
            <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full lg:gap-4 lg:py-30 py-10 lg:pt-40 pt-20 lg:px-40 px-10 font-sans bg-[#F5F8F3]">
                <div className="font-semibold lg:text-2xl text-2xl">{title}</div>
                <div className="font-light lg:max-w-2xl lg:text-center md:text-base text-s text-[#898989]">{description}</div>
            </div>
    )
}

export default RateHeader;
