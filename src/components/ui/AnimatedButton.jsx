import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const AnimatedButton = ({
    text = "Compare Now - It's Free",
    className = "",
}) => {
    return (
        <button
            className={twMerge(
                `
        relative inline-flex justify-between items-center gap-2 px-6 py-[18px] font-medium leading-[1.5] main rounded-xl text-white 
        bg-[#E32FB6]  
        overflow-hidden group cursor-pointer
        `,
                className
            )}
            style={{
                boxShadow:
                    "inset 0 0 10px #ffffff14, inset 0 0 10px #ebebeb75",
            }}
        >
            {/* Text container */}
            <div className="relative h-6 overflow-hidden">
                <span
                    className="
            block transition-transform duration-300 ease-[cubic-bezier(.7,0,.3,1)]
            group-hover:-translate-y-full
          "
                >
                    {text}
                </span>
                <span
                    className="
            block absolute top-full left-0 w-full
            transition-transform duration-300 ease-[cubic-bezier(.7,0,.3,1)]
            group-hover:-translate-y-full
          "
                >
                    {text}
                </span>
            </div>

            {/* Arrow with rotate animation */}
            <ArrowRight
                size={20}
                className="transition-transform duration-300 ease-in-out transform -rotate-45 group-hover:rotate-0"
            />
        </button>
    );
};

export default AnimatedButton;
