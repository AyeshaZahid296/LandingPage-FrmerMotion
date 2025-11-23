import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const AnimatedCenterBtn = ({
    leftText = "Previous",
    rightText = "Next",
    className = "",
}) => {
    return (
        <button
            className={twMerge(
                `
        relative inline-flex justify-center items-center gap-3
        px-6 py-3 rounded-xl font-medium text-white bg-[#E32FB6]
        overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out
        `,
                className
            )}
            style={{
                boxShadow:
                    "inset 0 0 10px #ffffff14, inset 0 0 10px #ebebeb75",
            }}
        >
            {/* Left Text */}
            <span
                className="
                    transition-transform duration-300 ease-[cubic-bezier(.7,0,.3,1)]
                    group-hover:-translate-x-1
                "
            >
                {leftText}
            </span>

            {/* Center Icon */}
            <FaChevronRight
                size={12}
                className="transition-transform duration-300 ease-in-out transform -rotate-45 group-hover:rotate-0"
            />

            {/* Right Text */}
            <span
                className="
                    transition-transform duration-300 ease-[cubic-bezier(.7,0,.3,1)]
                    group-hover:translate-x-1
                "
            >
                {rightText}
            </span>
        </button>
    );
};

export default AnimatedCenterBtn;
