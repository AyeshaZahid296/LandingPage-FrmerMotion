import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Card = ({ icon, number, heading, items = [], className = "" }) => {
  return (
    <motion.div
      className={`p-4 sm:p-6 lg:p-8 rounded-xl border m-2 
        bg-[#D6EC5D]/11 border-[#212121]/20 
        relative flex flex-col gap-4 ${className}`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="bg-[#FE65D9] p-2 sm:p-3 rounded-[.5rem] flex-shrink-0">
          {icon}
        </div>
        <span className="text-gray-500 text-sm sm:text-base md:text-lg font-semibold">
          {number}
        </span>
      </div>

      {/* Animated Heading */}
      <AnimatedText
        text={heading}
        className="font-[Neighbor] text-gray-900 font-medium 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
      />

      {/* List Section */}
      <ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-[5px]">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xs sm:text-sm md:text-base font-normal leading-[131%]"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export { Card };
