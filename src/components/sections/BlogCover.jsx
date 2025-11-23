import { motion } from "framer-motion";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { face, LinePattern, blogCoverBg } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";

const BlogCover = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-white overflow-hidden rounded-b-[20px]">
            {/* ------------------- TOP SECTION ------------------- */}
            <div className="relative w-full bg-[#4050DC] rounded-t-[20px] overflow-hidden">
                {/* BG Pattern */}
                <img
                    src={LinePattern}
                    alt="pattern"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* CONTENT */}
                <div className="relative flex flex-col md:flex-col lg:flex-row justify-between items-start w-[90%] max-w-[1400px] mx-auto pt-16 pb-16">
                    {/* Heading + Buttons */}
                    <div className="flex flex-col gap-[43px] w-full lg:w-[923px]">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex flex-col md:flex-row lg:flex-wrap items-start leading-tight">
                                <AnimatedText
                                    text="Discover valuable "
                                    className="font-[Neighbor] h1 font-semibold h1 tracking-[-0.02em]"
                                />
                                <AnimatedText
                                    text="insights and tips"
                                    className="font-[Neighbor] font-semibold h1 tracking-[-0.02em] text-[#FAFE13]"
                                />
                                <br />
                                <AnimatedText
                                    text=" in our blog"
                                    className="font-[Neighbor] font-semibold h1 tracking-[-0.02em]"
                                />
                                {/* Last part + image inline */}
                                <div className="flex items-center mt-2">

                                    <motion.img
                                        src={face}
                                        alt="face"
                                        className="sm:ml-3 w-[57px] object-cover inline-block origin-center"
                                        whileHover={{
                                            rotate: [-15, 15, -10, 10, -5, 5, 0],
                                            transition: {
                                                duration: 1.2,
                                                ease: "easeInOut",
                                                times: [0, 0.2, 0.4, 0.6, 0.75, 0.85, 1],
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paragraph + Buttons (Right Side) */}
                    <div className="flex flex-col gap-4 mt-6 md:mt-6 lg:mt-0 w-full lg:w-3/4 px-4 sm:px-6 md:px-4 lg:px-0">
                        <p className="text-base main  leading-[1.5] w-max-[47ch]">
                            Onze blog is je slimme shortcut: heldere uitleg, praktische tips en diepgaande kennis waarmee je sneller en zekerder kiest. Volg de nieuwste trends en ontwikkelingen in vergelijken en pak direct voordeel bij je volgende keuze.
                        </p>
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-start lg:items-center gap-3 lg:gap-4">
                            <AnimatedButton text="Read More" className="w-full lg:w-auto" />

                            <div
                                className="flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-auto 
             rounded-xl border border-[#212121]/20 bg-white/90 
             px-3 sm:px-4 py-2 shadow-inner"
                                style={{
                                    boxShadow: "inset 0 0 10px #ffffff14, inset 0 0 10px #ebebeb75",
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search product..."
                                    className="flex-1 main text-[#212121] 
               bg-transparent focus:outline-none placeholder:text-[#636363]"
                                />
                                <button
                                    className="text-[#636363] flex items-center justify-center hover:cursor-pointer transition-colors duration-200"
                                >
                                    <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ------------------- BOTTOM SECTION ------------------- */}
            <div className="relative w-full h-[537px] rounded-b-[20px] overflow-hidden mt-0">
                {/* BG Image */}
                <img
                    src={blogCoverBg}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />

                {/* MARQUEE */}
                <div className="absolute bottom-0 left-0 w-full py-4 bg-[#1D5E48] backdrop-blur-sm overflow-hidden border-t border-white/30 rounded-b-[20px]">
                    <motion.div
                        className="flex gap-12 text-white/90 text-[18px] font-[Geist] whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                        style={{ display: "flex" }}
                    >
                        {[...Array(2)].map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex gap-12">
                                {[
                                    "100% independent since 2018",
                                    "2.3M comparisons completed",
                                    "Secure & GDPR compliant",
                                    "9.4/10 user rating",
                                ].map((text, i) => (
                                    <span
                                        key={`${repeatIndex}-${i}`}
                                        className="flex items-center gap-2 min-w-[237px] justify-center"
                                    >
                                        <FaCheckCircle className="text-[#ffffff]" />
                                        {text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogCover;
