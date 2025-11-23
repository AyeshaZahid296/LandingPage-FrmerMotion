import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { face, carCard, homeCard, heroBg, LinePattern } from "../../assets";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedText from "../ui/AnimatedText";
import Spacer from "../ui/Spacer";

const slides = [
    { id: 1, title: "Car Insurance", img: carCard, text: "Lorem Ipsum is that it has a more-or-less normal distribution a more-or-less normal distribution." },
    { id: 2, title: "Home & Contents Insurance", img: homeCard, text: "Lorem Ipsum is that it has a more-or-less normal distribution a more-or-less normal distribution." },
    { id: 3, title: "Travel Insurance", img: carCard, text: "Lorem Ipsum is that it has a more-or-less normal distribution a more-or-less normal distribution." },
    { id: 4, title: "Health Insurance", img: homeCard, text: "Lorem Ipsum is that it has a more-or-less normal distribution a more-or-less normal distribution." },
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
    const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative w-full min-h-screen max-h-auto flex flex-col items-center text-white overflow-hidden rounded-t-4xl rounded-b-3xl">
            {/* ------------------- TOP SECTION (Height Increased for Mobile/Tablet) ------------------- */}
            <div className="relative w-full bg-[#1d4edb] rounded-t-[20px] overflow-hidden 
    min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-auto">

                {/* BG Pattern */}
                <img
                    src={LinePattern}
                    alt="pattern"
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                />

                {/* CONTENT */}
                <div className="relative flex flex-col lg:flex-row justify-between items-start w-[90%] max-w-[1400px] mx-auto pt-8 md:pt-16 lg:pt-24 pb-20 md:pb-32 lg:pb-48">
                    {/* Heading + Buttons */}
                    <div className="flex flex-col gap-5 md:gap-8 lg:gap-[43px] w-full lg:w-[60%] xl:w-[923px]">
                        <div className="flex flex-col items-start gap-4 md:gap-6">
                            <h1 className="h1 ls-tight lh-small flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center font-medium leading-tight">
                                <AnimatedText
                                    text="Find your "
                                    className="font-[Neighbor] font-mediun h1 lh-small tracking-[-0.02em] "
                                />

                                <AnimatedText
                                    text="perfect match "
                                    className="font-[Neighbor] font-mediun h1 lh-small  tracking-[-0.02em] text-[#FAFE13]"
                                />
                                <AnimatedText
                                    text="in seconds - 100% "
                                    className="font-[Neighbor] font-medium h1 lh-small tracking-[-0.02em]"
                                />
                                <AnimatedText
                                    text="independent, "
                                    className="font-[Neighbor] font-medium  h1 lh-small tracking-[-0.02em] text-[#FAFE13]"
                                />
                                {/* Last part + image together inline */}
                                <div className="flex items-center flex-wrap">
                                    <AnimatedText
                                        text="crystal clear."
                                        className="font-[Neighbor] font-medium h1 lh-small tracking-[-0.02em]"
                                    />
                                    <motion.img
                                        src={face}
                                        alt="face"
                                        className="ml-2 sm:ml-3 w-[57px]  sm:w-[66px]  object-cover inline-block origin-center"
                                        whileHover={{
                                            rotate: [-15, 15, -10, 10, -5, 5, 0],
                                            transition: { duration: 1.2, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.75, 0.85, 1] },
                                        }}
                                    />
                                </div>
                            </h1>

                            {/* Mobile: Column Layout */}
                            <div className="flex flex-col gap-4 w-full md:hidden">
                                <p className="main leading-[1.5] font-normal">
                                    <strong>Stop met gokken. Begin met vergelijken. </strong>
                                    Wij zijn onafhankelijk, jij bespaart. Transparante prijzen, echte ervaringen, meteen resultaat.
                                </p>
                                <div className="flex flex-row gap-3">
                                    <AnimatedButton />
                                </div>
                            </div>

                            {/* Tablet: Row Layout (Paragraph + Button) */}
                            <div className="hidden md:flex lg:hidden flex-row items-start justify-between gap-6 w-full">
                                <p className="main leading-[1.6] flex-1">
                                    <strong>Stop met gokken. Begin met vergelijken. </strong>
                                    Wij zijn onafhankelijk, jij bespaart. Transparante prijzen, echte ervaringen, meteen resultaat.
                                </p>
                                <div className="flex-shrink-0 pb-10">
                                    <AnimatedButton />
                                </div>
                            </div>

                            {/* Desktop: Original Buttons */}
                            <div className="hidden lg:flex flex-row xs:flex-row gap-3 xs:gap-4">
                                <AnimatedButton />
                                <AnimatedButton text={"Learn More"} />
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Paragraph (Right Side) */}
                    <p className="hidden lg:block lg:w-[35%] main leading-[1.6] mt-6 lg:mt-4 lg:ml-8">
                        <strong>Stop met gokken. Begin met vergelijken. </strong>
                        Wij zijn onafhankelijk, jij bespaart. Transparante prijzen, echte ervaringen, meteen resultaat.
                    </p>
                </div>

                <div className="sm:hidden bg-no-repeat bg-cover bg-[#1D4EDB] lg:flex"
                    style={{
                        backgroundImage: `url(${LinePattern})`,
                        backgroundColor: "#1D4EDB",
                    }}>
                    <Spacer len='8' />
                    <Spacer len='5' />
                </div>
            </div>
            {/* ------------------- MIDDLE SECTION (Floating Slider) - Now overlaps top section ------------------- */}
            <div className="
                absolute
                z-20
                w-full
                flex
                justify-center
                px-4
                top-[60%]  /* Increased from 45% */
                sm:top-[40%]  /* Increased for small screens */
                md:px-6
                lg:px-0
                -mt-12
                md:-mt-16
                md:top-[40%]  /* Adjusted for tablet */
                lg:top-[55%]
                lg:right-[10%]
                lg:transform
                lg:-translate-y-1/2
                lg:w-[680px]
            ">
                <div className="flex flex-col items-center gap-4 w-full max-w-[580px]">
                    {/* Counter + Arrows */}
                    <div className="flex justify-between w-full items-center text-white main">
                        <span>
                            [{String(slides[current].id).padStart(2, "0")}]
                        </span>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrev}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-white hover:bg-[#E32FB6] transition"
                            >
                                <FaArrowLeft className="main" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-white hover:bg-[#E32FB6] transition"
                            >
                                <FaArrowRight className="main" />
                            </button>
                        </div>
                    </div>

                    {/* Slider Cards */}
                    <div className="flex justify-center gap-3 w-full flex-wrap md:flex-nowrap">
                        {/* Mobile: 1 card */}
                        <div className="sm:hidden bg-white rounded-[14px] w-full max-w-[280px] h-[220px] p-3 flex flex-col gap-3">
                            <h3 className="font-[Neighbor] h5 leading-[1.1]  font-medium text-black">
                                {slides[current].title}
                            </h3>
                            <img src={slides[current].img} alt={slides[current].title} className="w-full h-[120px] object-cover rounded-[10px]" />
                            <p className="main leading-[1.5] text-black/90 line-clamp-2">{slides[current].text}</p>
                        </div>

                        {/* Tablet: 2 cards */}
                        <div className="hidden sm:flex lg:hidden gap-3">
                            {[slides[current], slides[(current + 1) % slides.length]].map((card) => (
                                <div key={card.id} className="bg-white rounded-[14px] w-[220px] h-[230px] p-3 flex flex-col gap-3">
                                    <h3 className="font-[Neighbor] h5 leading-[1.1] font-medium text-black">
                                        {card.title}
                                    </h3>
                                    <img src={card.img} alt={card.title} className="w-full h-[120px] object-cover rounded-[10px]" />
                                    <p className=" main leading-[1.5] font-normal text-black/90 line-clamp-2">{card.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop: 2 cards (original layout) */}
                        <div className="hidden lg:flex gap-5">
                            {[slides[current], slides[(current + 1) % slides.length]].map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`bg-white border border-white/20 rounded-[14px] w-[415.43px] h-[377.57px] 
                                    p-4 flex flex-col gap-4 backdrop-blur-sm `}
                                >
                                    <h3 className="font-[Neighbor] h5 font-medium leading-[1.1] text-[#212121] ">
                                        {card.title}
                                    </h3>
                                    <img src={card.img} alt={card.title} className="w-full h-[220px] object-cover rounded-[10px]" />
                                    <p className="font-normal main leading-[1.5] text-black line-clamp-2">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------- BOTTOM SECTION ------------------- */}
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[450px] lg:h-[547px] rounded-b-[20px] overflow-hidden mt-0">
                {/* BG Image */}
                <img
                    src={heroBg}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />

                {/* MARQUEE */}
                <div className="absolute bottom-0 left-0 w-full py-3 sm:py-4 bg-[#1D5E48] backdrop-blur-sm overflow-hidden border-t border-white/30 rounded-b-[20px]">
                    <motion.div
                        className="flex gap-6 sm:gap-8 md:gap-12 text-white/90 text-[12px] sm:text-[14px] md:text-[16px] font-[Geist] whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex gap-6 sm:gap-8 md:gap-12">
                                {[
                                    "100% independent since 2018",
                                    "2.3M comparisons completed",
                                    "Secure & GDPR compliant",
                                    "9.4/10 user rating",
                                ].map((text, i) => (
                                    <span
                                        key={`${repeatIndex}-${i}`}
                                        className="flex items-center gap-2 min-w-[180px] sm:min-w-[200px] md:min-w-[237px] justify-center"
                                    >
                                        <FaCheckCircle className="text-[#ffffff] text-xs sm:text-sm" />
                                        <span className="text-xs sm:text-sm md:text-base">{text}</span>
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

export default HeroSection;