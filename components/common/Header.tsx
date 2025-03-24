
interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
    return(
        <div className="lg:flex Lg:flex-col lg:w-full flex flex-col gap-2  lg:gap-6  lg:py-30 py-8 lg:pt-40 lg:px-40 pt-20 px-10 font-sans bg-[#F5F8F3]">
            <div className="font-semibold text-2xl md:text-5xl">{title}</div>
            <div className="font-normal md:text-base text-s text-[#898989]">{description}</div>
        </div>
    )
}

export default Header;
