import { useState } from "react";
import { CarInsurance1, CarInsurance2 } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "../ui/AnimatedText";

const filters = [
    { id: 1, label: "Car Insurance", counter: "01" },
    { id: 2, label: "Energy Plans", counter: "02" },
    { id: 3, label: "Home Insurance", counter: "03" },
    { id: 4, label: "Mobile & Internet", counter: "04" },
    { id: 5, label: "Travel Insurance", counter: "05" },
];

const ComparisonSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = filters[activeIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? filters.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === filters.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto text-center py-10 px-3 sm:px-6 lg:px-8 xl:px-10">
            {/* Heading */}
            <h2 className="flex flex-col items-center justify-center text-center">
                <AnimatedText
                    text="Popular comparisons start here"
                    align="center"
                    className="font-[Neighbor] font-medium h2 leading-[103%] tracking-[-0.02em] text-black whitespace-nowrap"
                />
            </h2>
            {/* Filters */}
            <div
                className="flex gap-3 sm:gap-4 mt-8 
        flex-nowrap overflow-x-auto scrollbar-hide justify-start 
        px-4 sm:px-0 scroll-smooth
        md:overflow-x-auto md:flex-nowrap md:justify-start"
            >
                {filters.map((f, index) => (
                    <button
                        key={f.id}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-full px-5 py-2 sm:px-5 lg:px-6 border 
              text-xs sm:text-sm lg:text-base font-normal whitespace-nowrap 
              transition-colors duration-300 ${active.id === f.id
                                ? "bg-[#3B4EDB] text-white"
                                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
            {/* Content Section */}
            <div
                className="
          flex flex-col lg:flex-row justify-between items-center 
          gap-6 lg:gap-14 xl:gap-16 mt-12 text-left lg:items-start lg:justify-start
        "
            >
                {/* Images */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-start w-full lg:w-auto">
                    {/* Main Image */}
                    <div className="relative w-full md:w-auto">
                        <img
                            src={CarInsurance1}
                            alt="Main"
                            className="
              w-full sm:w-[320px] md:w-[380px] lg:w-[520px] xl:w-[580px] 
              h-auto object-cover rounded-[16px] lg:rounded-[20px]
            "
                        />
                        {/* Counter for tablet - positioned at bottom right */}
                        <span className="
                absolute -bottom-3 -right-3 
                md:hidden
                bg-white border border-gray-200 
                rounded-full w-8 h-8 flex items-center justify-center 
                font-geist font-semibold text-sm shadow-md
              ">
                            {active.counter}
                        </span>
                    </div>

                    {/* Secondary Image */}
                    <div className="flex flex-col justify-between items-center md:items-start w-full md:w-auto">
                        <img
                            src={CarInsurance2}
                            alt="Small"
                            className="
                w-full sm:w-[60%] md:w-[200px] lg:w-[260px] xl:w-[290px]
                h-[180px] sm:h-[200px] md:h-[200px] lg:h-[260px] xl:h-[290px]
                object-cover rounded-[12px] lg:rounded-[16px]
              "
                        />
                        {/* Counter for desktop - hidden on tablet */}
                        <span className="font-geist font-semibold text-sm mt-2 hidden md:block">
                            [{active.counter}]
                        </span>
                    </div>
                </div>

                {/* Text + Button + Nav */}
                <div
                    className="
    flex flex-col justify-between 
    items-start text-start 
    w-full sm:w-auto max-w-[440px] xl:max-w-[480px]
    h-full
  "
                >
                    {/* Top section (Heading, paragraph, button) */}
                    <div className="flex flex-col items-start text-start gap-4">
                        <AnimatedText
                            text={active.label}
                            className="font-[Neighbor] font-medium h2 text-black"
                        />
                        <p className="main text-gray-700">
                            Find coverage from €19/month <br />
                            Compare 25+ insurers instantly
                        </p>

                        <div className="mt-2">
                            <AnimatedButton text={`Compare ${active.label}`} />
                        </div>
                    </div>

                    {/* Bottom section (Prev / Next buttons) */}
                    <div
                        className="
      flex items-center justify-center md:justify-start 
      gap-6 w-full pt-8 text-[#737373] mt-6 lg:mt-auto
    "
                    >
                        <button
                            onClick={handlePrev}
                            className="flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 
        border border-[#E5E5E5] rounded-full transition-colors duration-300 
        hover:bg-[#3B4EDB] hover:text-white text-sm sm:text-base lg:text-lg"
                        >
                            <FaArrowLeftLong size={16} /> Prev
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 
        border border-[#E5E5E5] rounded-full transition-colors duration-300 
        hover:bg-[#3B4EDB] hover:text-white text-sm sm:text-base lg:text-lg"
                        >
                            Next <FaArrowRightLong size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComparisonSection;