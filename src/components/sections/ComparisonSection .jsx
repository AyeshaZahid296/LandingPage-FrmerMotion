import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    LinePattern,
} from "../../assets";
import AnimatedText from "../ui/AnimatedText";

const ComparisonSection = () => {
    const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    const [topImages, setTopImages] = useState([img1, img2, img3]);
    const [thirdImage, setThirdImage] = useState(img4);
    const [fourthImages, setFourthImages] = useState([img5, img6, img7]);
    const [fifthImages, setFifthImages] = useState([img8, img9]);

    const shuffleArray = (arr, count = arr.length) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTopImages(shuffleArray(allImages, 3));
            setThirdImage(shuffleArray(allImages, 1)[0]);
            setFourthImages(shuffleArray(allImages, 3));
            setFifthImages(shuffleArray(allImages, 2));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${LinePattern})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative overflow-hidden text-white rounded-3xl bg-[#1D5E48] w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12"
        >
            <div className="max-w-[1440px] mx-auto space-y-20 sm:space-y-24 md:space-y-26">
                {/* FIRST SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-10 mb-10">
                    {/* LEFT SIDE HEADING */}
                    <h2 className="flex flex-wrap leading-tight w-full lg:w-1/2 text-left">
                        <AnimatedText
                            text="The comparison site"

                            className="block font-[Neighbor] font-medium h2 tracking-[-0.02em]"
                        />
                        <AnimatedText
                            text="that puts"
                            className="block font-[Neighbor] font-medium h2 tracking-[-0.02em] text-pink-400"
                        />
                        <AnimatedText
                            text="you first"
                            className="block font-[Neighbor] font-medium h2 tracking-[-0.02em]"
                        />
                    </h2>

                    {/* RIGHT SIDE PARAGRAPH */}
                    <p className="w-full lg:w-1/2 main font-normal leading-[1.5] mt-4 lg:mt-0 ">
                        We make comparing simple and stress-free - no hidden agendas, just
                        clear results designed to help you save time and money.
                    </p>
                </div>

                {/* SECOND SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 w-full mb-10 mt-0">
                    {/* LEFT SIDE (TEXT + TAGS) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h3>
                            <AnimatedText
                                text="Truly Independent"
                                className="font-[Neighbor] h3 text-left"
                            />
                        </h3>
                        <div
                            className=" 
  grid grid-cols-1 sm:grid-cols-2 
  gap-2 sm:gap-3 mt-4 
  justify-items-start sm:justify-items-start 
  md:gap-x-4 md:gap-y-2
  lg:gap-x-6 
"
                        >
                            {[
                                "No commission bias",
                                "No paid rankings",
                                "Objective recommendations",
                                "Your interests first",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="
                       px-5 py-2 small md:main font-normal leading-[1.5]
                        border border-white/50 rounded-full 
                        text-xs sm:text-sm md:text-base whitespace-nowrap
                        text-center sm:text-left
                    "
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (IMAGES) */}
                    <div
                        className="
            flex gap-3 sm:gap-4 flex-wrap justify-center 
            w-full lg:w-1/2 
            lg:justify-end
        "
                    >
                        {topImages.map((src, i) => (
                            <motion.div
                                key={i}
                                className={`
      rounded-xl overflow-hidden bg-white/10 flex-shrink-0
      ${i === 0
                                        ? "w-[8rem] h-[5.5rem] sm:w-30 sm:h-28 md:w-30 md:h-24 lg:w-32 lg:h-35" // img1 
                                        : i === 1
                                            ? "w-[8rem] h-[5.5rem] sm:w-30 sm:h-28 md:w-30 md:h-24 lg:w-48 lg:h-35" // image 2
                                            : " h-[12rem] sm:w-24 sm:h-28 md:w-28 md:h-24 lg:w-48 lg:h-35 mt-3 sm:mt-0 w-full flex justify-center" // image 3
                                    }
    `}
                            >
                                <motion.img
                                    src={src}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>



                <hr className="opacity-40  mb-10" />
                {/* THIRD SECTION */}
                <div className="flex flex-col md:flex-row items-center md:items-end w-full mb-10 md:mb-0 md:justify-between gap-0 md:gap-0 px-0">

                    <div>
                        {/* IMAGE — hidden on mobile, visible from sm and up */}
                        <div className="hidden sm:flex order-2 md:order-none w-[8rem] h-[5.5rem] sm:w-30 sm:h-28 md:w-30 md:h-24 lg:w-32 lg:h-35 mb-10 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                            <motion.img
                                key={thirdImage}
                                src={thirdImage}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>

                        {/* TEXT SECTION */}
                        <h3 className="order-1 h3 md:order-none md:w-3/4 space-y-3 sm:space-y-4 flex flex-col items-start">
                            <AnimatedText
                                text="Lightning Fast"
                                className="font-[Neighbor] font-medium h3 text-left"
                            />
                            <p className="main font-normal leading-relaxed">
                                Results in under 60 seconds. Real-time pricing updates. Instant
                                online switching. No waiting for quotes.
                            </p>
                        </h3>
                    </div>

                    {/* 'Best Quality' — perfectly right-aligned now */}
                    <div className="order-3 md:order-none w-full md:w-auto flex justify-end md:self-end !m-0 !p-0">
                        <AnimatedText
                            text="Best Quality"
                            className="font-[Neighbor] leading-[1.5] h3 whitespace-nowrap text-right"
                        />
                    </div>

                </div>

                <hr className="opacity-40 mb-10 mt-10" />

                {/* FOURTH SECTION */}
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full mb-10">

                    {/* HEADING + PARAGRAPH (first on mobile) */}
                    <h3 className="order-1 h3 md:order-none md:w-2/3 space-y-3 sm:space-y-4 flex flex-col items-start text-left">
                        <AnimatedText
                            text="Completely Free"
                            className="font-[Neighbor] h3 font-medium text-left"
                        />
                        <p className="main font-normal leading-relaxed">
                            Vergelijker is completely free to use — no hidden costs, no tricks.
                            Just honest comparisons that help you make better choices.
                        </p>
                    </h3>

                    {/* FIRST TWO IMAGES */}
                    <div className="order-2 md:order-none flex flex-col sm:flex-row gap-3 sm:gap-6 w-full md:w-auto">
                        {fourthImages.slice(0, 2).map((src, i) => (
                            <div
                                key={i}
                                className="
          w-full h-[12rem] sm:w-24 sm:h-28 md:w-32 md:h-28 lg:w-36 
          rounded-xl overflow-hidden bg-white/10 flex-shrink-0
        "
                            >
                                <motion.img
                                    src={src}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* TEXT + LAST IMAGE WRAPPER */}
                    <div className="order-3 h3 md:order-none flex flex-col md:flex-row items-center md:items-center justify-center w-full md:w-auto gap-0">
                        {/* "Free. Fair. Fast." */}
                        <div className="flex flex-col gap-2 sm:gap-3 justify-center md:justify-start text-left w-full md:w-auto">
                            {["Free.", "Fair.", "Fast."].map((word, i) => (
                                <AnimatedText
                                    key={i}
                                    text={word}
                                    className="font-[Neighbor] h3 leading-[1.1]"
                                />
                            ))}
                        </div>

                        {/* LAST IMAGE */}
                        <div
                            className="w-full h-[12rem] sm:w-24 sm:h-28 md:w-32 md:h-28 lg:w-36 
               rounded-xl overflow-hidden bg-white/10 flex-shrink-0 md:ml-4 flex items-center justify-center"
                        >
                            <motion.img
                                key={fourthImages[2]}
                                src={fourthImages[2]}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>
                    </div>



                </div>


                <hr className="opacity-40 mb-10" />

                {/* FIFTH SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 w-full mb-0">

                    {/* LEFT SIDE TEXT */}
                    <div className="space-y-4 sm:space-y-6 flex flex-col items-start text-left w-full md:w-1/2">
                        <h3>
                            <AnimatedText
                                text="Secure & Private"
                                className="font-[Neighbor] h3 font-medium text-left"
                            />
                        </h3>

                        <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 flex-wrap">
                            {[
                                "Bank-level encryption",
                                "GDPR compliant",
                                "Data never sold",
                            ].map((txt, i) => (
                                <span
                                    key={i}
                                    className="inline-flex w-fit  border border-white/50 rounded-full  px-5 py-2 small md:main font-normal leading-[1.5] whitespace-nowrap"
                                >
                                    {txt}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDE (IMAGES + TEXT) */}
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-start md:justify-end w-full md:w-1/2">

                        {/* IMAGES */}
                        <div className="flex gap-3 sm:gap-4 justify-start">
                            {fifthImages.map((src, i) => (
                                <div
                                    key={i}
                                    className={`
                        ${i < 2
                                            ? "w-[8rem] h-[5.5rem] sm:w-30 sm:h-28 md:w-30 md:h-24 lg:w-32 lg:h-35"
                                            : "w-[4rem] h-[12rem] sm:w-24 sm:h-28 md:w-28 md:h-24 lg:w-32 lg:h-[8.75rem]"
                                        }
                        rounded-xl overflow-hidden bg-white/10 flex-shrink-0
                    `}
                                >
                                    <motion.img
                                        src={src}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* TEXT (justified to start on mobile) */}
                        <div className="flex flex-col justify-start items-start text-left w-full pl-0 sm:pl-0 md:pl-0 ml-0 sm:ml-0 md:ml-0">
                            <AnimatedText
                                text="Transparent"
                                lineBreakChar="\n"
                                className="font-[Neighbor] h3 font-normal leading-[1.1]"
                            />
                            <div className="flex flex-row">
                                <AnimatedText
                                    text="Privacy"
                                    lineBreakChar="\n"
                                    className="font-[Neighbor] h3 font-normal leading-[1.1]"
                                />
                                <AnimatedText
                                    text="Policy"
                                    lineBreakChar="\n"
                                    className="font-[Neighbor] h3 font-normal leading-[1.1]"
                                />
                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </motion.div>
    );
};

export default ComparisonSection;
