import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";
import { LinePattern, blogCoverBg, face } from "../../assets";
import AnimatedText from "../ui/AnimatedText";
import { FaCalendarDays, FaChevronRight } from "react-icons/fa6";
import { } from "react-icons/bi";
import AnimatedCenterBtn from "../ui/AnimatedCenterBtn";

const DetailCover = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-white overflow-visible">
            {/* Background Pattern */}
            <img
                src={LinePattern}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* ---------------- TOP SECTION ---------------- */}
            <div className="relative w-full bg-[#4050DC] rounded-[20px] overflow-hidden z-10">
                <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-12 sm:pt-16 pb-24 md:pb-32 lg:pb-44 max-w-[1100px] mx-auto">
                    {/* button */}
                    <AnimatedCenterBtn leftText="Blog" rightText="Kennis" className="text-lg" />

                    {/* Headline */}
                    <h2 className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6 mt-4">
                        <AnimatedText
                            text="De voordelen van"
                            align="center"
                            className="font-[Neighbor] font-medium h2 leading-[1.5] tracking-[-0.02em] items-center "
                        />
                        <AnimatedText
                            text=" onafhankelijk vergelijken"
                            align="center"
                            className="font-[Neighbor] font-medium h2 leading-[1.5] tracking-[-0.02em] text-[#FAFE13]"
                        />
                    </h2>

                    {/* Author + Date Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white/90 text-sm mt-4 sm:mt-6 mb-4 gap-3 sm:gap-0">
                        {/* Left: Author Info - Now comes first on mobile */}
                        <div className="flex items-center gap-3 order-1">
                            <img
                                src={face}
                                alt="author"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-[#1D5E48]"
                            />
                            <div className="flex flex-col items-start">
                                <span className="font-normal  main leading-[1.5]">Jan Jansen</span>
                                <span className="font-mormal text-white/40 main leading-[1.5]">4 min leestijd</span>
                            </div>
                        </div>

                        {/* Right: Date + Time - Now comes second on mobile */}
                        <div className="flex items-center text-base sm:text-xl gap-3 order-2">
                            <FaCalendarDays className="text-white/70 main font-normal leading-[1.5]" />
                            <span>April 14, 2025</span>
                            <FaRegClock className="text-white/70 main font-normal leading-[1.5]" />
                            <span>9:36 am</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* ---------------- BOTTOM IMAGE CARD ---------------- */}
            <div className="relative w-[92%] max-w-[1400px] bg-white text-black rounded-[20px] overflow-hidden -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-43 shadow-2xl z-20">
                <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[537px]">
                    <img
                        src={blogCoverBg}
                        alt="blog cover"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" />
                </div>
            </div>
        </section>
    );
};

export default DetailCover;