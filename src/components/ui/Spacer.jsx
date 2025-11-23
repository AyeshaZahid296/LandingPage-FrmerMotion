import React from "react";

const Spacer = ({ len = "8" }) => {
    // Base styling for all spacers
    const base = "w-full pointer-events-none";

    // Different sizes (like your CSS min-height values)
    const sizes = {
        8: "min-h-[7.125rem] md:min-h-[5rem]",
        7: "min-h-[7.9375rem] md:min-h-[5rem]",
        6: "min-h-[6.875rem] md:min-h-[3rem]",
        5: "min-h-[6.1875rem] md:min-h-[4rem]",
        4: "min-h-[3.125rem] md:min-h-[2.5rem]",
        3: "min-h-[2.1875rem] md:min-h-[1.85rem]",
        2: "min-h-[5rem] md:min-h-[4rem]",
        1: "min-h-[3.75rem] md:min-h-[2.5rem]",
    };

    // Choose size by variant name
    const appliedSize = '' + (sizes[len] || sizes[2]);

    return <div className={`${base} ${appliedSize}`} />;
};

export default Spacer;
