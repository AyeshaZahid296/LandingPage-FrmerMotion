import React from "react";

const RoundedButton = ({ text, className = "", ...props }) => {
    return (
        <button
            className={`text-xs sm:text-sm md:text-medi px-3 py-0.5 md:px-6 md:py-3 rounded-full font-medium transition duration-300 hover:scale-105 ${className}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default RoundedButton;
