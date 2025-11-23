"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa";
import { Logo, face, VectorE, VectorV } from "../../assets";
import AnimatedText from "../ui/AnimatedText";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedFace from "../ui/AnimatedFace";

const FooterTopSection = () => {
    return (
        <div className="relative flex justify-center items-end bg-white w-full overflow-hidden">
            <div className="relative w-full px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex justify-center">
                {/* Back Black Div */}
                <div className="absolute top-1/2 inset-x-[4px] xl:inset-x-[8px] bg-[#0C0C0C] h-[50%] rounded-t-4xl z-0" />

                {/* Front Yellow Card - Dutch Style */}
                <motion.div
                    className="relative z-10
          w-full max-w-[1280px]
          min-h-[95vh] sm:min-h-[85vh] md:min-h-[70vh] lg:min-h-[90vh]
          bg-[#FCFF5C] rounded-4xl shadow-xl
          flex flex-col justify-between items-center
          pt-8 sm:pt-12 md:pt-16 text-center mx-auto overflow-hidden
          cursor-pointer"
                    whileHover="hover"
                    initial="initial"
                    animate="initial"
                >
                    {/* Vectors */}
                    <img
                        src={VectorV}
                        alt=""
                        className="absolute top-0 left-0 w-[60px] sm:w-[100px] md:w-[150px] opacity-90"
                    />
                    <img
                        src={VectorE}
                        alt=""
                        className="absolute bottom-0 right-0 w-[70px] sm:w-[120px] md:w-[180px] opacity-80"
                    />

                    {/* Main Content */}
                    <div className="relative flex flex-col items-center px-4 sm:px-6 md:px-10 mb-6 sm:mb-8 md:mb-12 w-full">
                        <div className="flex justify-center align-middle items-center flex-col pt-10">
                            {/* Logo */}
                            <motion.img
                                src={Logo}
                                alt="logo"
                                className="w-46 sm:w-37 md:w-41 lg:w-47 cursor-pointer mb-10"

                            />


                            {/* Faces */}
                            <AnimatedFace
                                src={face}
                                className="w-[58px] absolute top-0 right-1  sm:right-8  sm:top-0  md:right-8 lg:right-52  rotate-27"
                                delay={0}

                            />
                            <AnimatedFace
                                src={face}
                                className="w-[58px] absolute bottom-0 left-1 sm:left-6 sm:bottom-0  md:left-6 lg:left-45 -rotate-27"
                                delay={0.3}
                            />

                            {/* Main Heading */}
                            <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] mb-4 sm:mb-6">
                                {/* <h1 className="font-bold text-[#0C0C0C]
                text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3rem]
                leading-tight sm:leading-tighter tracking-tight
                break-words">
                                    Ready to confidently find your perfect match?
                                </h1> */}
                                <AnimatedText
                                    className="mt-3 font-[Neighbor] font-bold text-[#0C0C0C]
                text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3rem]
                leading-tight sm:leading-tighter tracking-tight "
                                    align="center"
                                    text="Ready to confidently find your perfect match?"
                                />
                            </div>

                            {/* Subtext */}
                            <p
                                className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl
              w-[50%] sm:w-[50%] md:w-[45%] mx-auto leading-relaxed mb-6 sm:mb-8"
                            >
                                Join 500,000+ smart consumers who compare with confidence
                            </p>

                            {/* Buttons - Dutch Style */}
                            <div
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 
            justify-center items-center w-full sm:w-auto px-4"
                            >
                                <AnimatedButton
                                    text="Start Comparing"
                                    className="text-sm sm:text-base"
                                />
                                <AnimatedButton
                                    text="All Categories"
                                    className="bg-white text-[#212121] text-sm sm:text-base"
                                />
                                {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0C0C0C] text-white font-semibold 
                  py-3 sm:py-4 px-8 sm:px-10 
                  rounded-lg sm:rounded-xl
                  text-base sm:text-lg md:text-xl
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Vergelijk nu
                                <FaStar className="text-yellow-400" />
                            </motion.button> */}

                                {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#0C0C0C] border-2 border-[#0C0C0C] font-semibold 
                  py-3 sm:py-4 px-8 sm:px-10 
                  rounded-lg sm:rounded-xl
                  text-base sm:text-lg md:text-xl
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Ik wil meer weten
                                <FaShieldAlt className="text-[#0C0C0C]" />
                            </motion.button> */}
                            </div>
                        </div>

                        {/* Trust Badges - Dutch Style */}

                    </div>
                    {/* Marquee */}
                    <div
                        className="w-full py-3 sm:py-4 md:py-5 bg-[#1D5E48]
            backdrop-blur-sm overflow-hidden border-t border-white/30
            rounded-b-[20px]"
                    >
                        <motion.div
                            className="flex whitespace-nowrap"
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "linear",
                            }}
                        >
                            {[...Array(2)].map((_, repeatIndex) => (
                                <div
                                    key={repeatIndex}
                                    className="flex gap-5 sm:gap-8 md:gap-12 px-6 sm:px-10 md:px-14"
                                >
                                    {[
                                        "100% onafhankelijk sinds 2018",
                                        "2.3M vergelijkingen gemaakt",
                                        "Veilig & GDPR compliant",
                                        "9.4/10 gebruikersrating",
                                    ].map((text, i) => (
                                        <span
                                            key={`${repeatIndex}-${i}`}
                                            className="flex items-center gap-2 
                      text-[11px] sm:text-sm md:text-base lg:text-lg 
                      text-white/90 font-[Geist]"
                                        >
                                            <FaCheckCircle className="text-white shrink-0" />
                                            {text}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>


                </motion.div>
            </div>
        </div>
    );
};

export default FooterTopSection;