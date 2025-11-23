import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { user1, user2, user3, LinePattern } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";

const testimonials = [
    {
        id: 1,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user1,
    },
    {
        id: 2,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user2,
    },
    {
        id: 3,
        name: "Patrick",
        role: "Product Designer at COVEO",
        text: "I was recommended masco from a dear friend and WOW!!! Gives energy, strength & mostly your motivation and you helped me grow beyond my expectations.",
        img: user3,
    },
];

const InfiniteScrollColumn = ({ testimonials, speed = 25, reverse = false, theme }) => {
    const isWhite = theme === "white";

    return (
        <div className="relative h-[400px] lg:h-[640px] 2xl:h-[720px] overflow-hidden">
            {/* Top Blur Overlay */}
            <div
                className={`absolute top-0 left-0 w-full h-8 sm:h-12 lg:h-16 pointer-events-none z-20 ${isWhite
                    ? "bg-gradient-to-b from-white to-transparent"
                    : "bg-gradient-to-b from-[#3B4EDB] to-transparent"
                    }`}
            />

            {/* Infinite Motion Section */}
            <motion.div
                className="flex flex-col"
                animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...testimonials, ...testimonials].map((item, i) => (
                    <div
                        key={i}
                        className={`${isWhite
                            ? "bg-white border border-[#0000001A] text-black"
                            : "bg-white/10 border border-white/20 text-white"
                            } backdrop-blur-xl rounded-2xl lg:rounded-3xl 
              w-full h-[250px] sm:h-[260px] lg:h-[300px] xl:h-[300px] 
              p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 
              flex flex-col gap-3 md:gap-4 lg:gap-x-[18px] 
               mx-auto mb-4`}
                    >
                        {/* Stars */}
                        <div className="flex gap-1 text-[#FAFE13]">
                            {Array(5)
                                .fill()
                                .map((_, i) => (
                                    <FaStar key={i} size={14} className="sm:text-base" />
                                ))}
                        </div>

                        {/* Heading */}
                        {/* <h3
                            className={`font-[Neighbor] h5 font-medium leading-[1.5] ${isWhite ? "text-black" : "text-white"
                                }`}
                        >
                            Great value home exercise
                        </h3> */}

                        {/* Paragraph */}
                        <p
                            className={`!m-0 font-[Geist] main font-normal leading-[1.5] overflow-hidden flex-1 ${isWhite ? "text-black/80" : "text-white/90"
                                }`}
                        >
                            {item.text}
                        </p>

                        {/* Profile */}
                        <div className="flex items-center gap-3 mt-0">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
                            />
                            <div className="flex-1 min-w-0">
                                <h4
                                    className={`font-[Geist] font-medium main leading-[120%] truncate ${isWhite ? "text-black" : "text-white"
                                        }`}
                                >
                                    {item.name}
                                </h4>
                                <p
                                    className={`font-[Geist]  font-normal small leading-[1.5] truncate ${isWhite ? "text-black/60" : "text-white/70"
                                        }`}
                                >
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Bottom Blur Overlay */}
            <div
                className={`absolute bottom-0 left-0 w-full h-8 sm:h-12 lg:h-16 pointer-events-none z-20 ${isWhite
                    ? "bg-gradient-to-t from-white to-transparent"
                    : "bg-gradient-to-t from-[#3B4EDB] to-transparent"
                    }`}
            />
        </div>
    );
};

const TestimonialsSection = ({ theme = "blue" }) => {
    const isWhite = theme === "white";

    return (
        <div
            className={`relative w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto rounded-[30px] overflow-hidden 
                  py-8 md:py-12 lg:py-[80px] flex flex-col gap-6 md:gap-8 lg:gap-[50px] 
                  px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 
                  ${isWhite ? "bg-white text-black" : "bg-[#3B4EDB] text-white"}`}
        >
            {/* Background Pattern */}
            <img
                src={LinePattern}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Top Section */}
            <div className="relative flex flex-col lg:flex-row justify-between items-start lg:px-[70px] xl:px-[100px] 2xl:px-[120px] z-10 gap-6 md:gap-8">
                <h2 className="flex flex-wrap max-w-5xl leading-tight">
                    <AnimatedText
                        text="Join "
                        className={`block font-[Neighbor] font-semibold h3 tracking-[-0.02em] leading-[1] ${isWhite ? "text-black" : "text-white"
                            }`}
                    />
                    <AnimatedText
                        text="thousands of "
                        className={`block font-[Neighbor] font-semibold h3 tracking-[-0.02em] leading-[1] ${isWhite ? "text-[#3B4EDB]" : "text-[#FAFE13]"
                            }`}
                    />
                    <AnimatedText
                        text="satisfied switchers "
                        className={`block font-[Neighbor] font-semibold h3 tracking-[-0.02em] leading-[1] ${isWhite ? "text-[#3B4EDB]" : "text-white"
                            }`}
                    />
                </h2>
                <p
                    className={`font-[Geist] main  leading-[1.5] max-w-full lg:max-w-[400px] mt-0 ${isWhite ? "text-black/80" : "text-white/90"
                        }`}
                >
                    Vergelijker.nl compares insurance, energy, telecom & financial products
                    with zero bias. Real reviews, transparent pricing, instant results.
                </p>
            </div>

            {/* Infinite Scroll Columns */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 z-10 lg:px-[70px] xl:px-0 2xl:px-[100px]">
                <InfiniteScrollColumn testimonials={testimonials} speed={22} theme={theme} />
                <div className="hidden sm:block">
                    <InfiniteScrollColumn testimonials={testimonials} speed={24} reverse theme={theme} />
                </div>
                <div className="hidden lg:block">
                    <InfiniteScrollColumn testimonials={testimonials} speed={20} theme={theme} />
                </div>
            </div>

            {/* Bottom Button */}
            {/* <div className="relative flex justify-center items-center z-10 mt-4 md:mt-6 lg:mt-0">
                <AnimatedButton
                    text={"See All Testimonials"}
                    className={isWhite ? "text-white" : ""}
                />
            </div> */}
        </div>
    );
};

export default TestimonialsSection;
