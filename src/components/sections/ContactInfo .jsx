import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedText from "../ui/AnimatedText";

const contactInfo = [
    {
        id: 1,
        icon: <FaPhone size={24} />,
        title: "Phone",
        text: "+31 (0)20 123 4567",
    },
    {
        id: 2,
        icon: <FaEnvelope size={24} />,
        title: "Email",
        text: "Info@Vergelijker.NL",
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt size={24} />,
        title: "Location",
        text: "Damstraat 1, Amsterdam\n1012 AB NL",
    },
];

const GetInTouch = () => {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4 md:px-12 bg-white text-black">
            {/* Heading */}
            <AnimatedText
                text="Get in Touch"
                className="font-[Neighbor] font-medium h3 leading-[100%] tracking-[-0.02em] text-center mb-4"
            />

            {/* Paragraph */}
            <p className="font-[Geist] font-normal main leading-[1.5] md:leading-[150%] text-center mb-12">
                Heb je vragen? Wij staan voor je klaar!
            </p>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full items-center lg:justify-between">
                {contactInfo.map((item) => (
                    <a
                        key={item.id}
                        className="flex items-center justify-start gap-4 w-full sm:w-[360px]  h-[106px] px-4 md:px-6  lg:gap-x-5 ld:gap-y-5 lg:leading-[1.5] lg:w-full rounded-[25.72px] border border-gray-300 shadow-sm transition-colors duration-300 hover:bg-[#1D5E48] hover:text-white cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 
                         font-normal
                        rounded-full bg-pink-400 text-white text-sm md:text-xl transition-colors duration-300">
                            {item.icon}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col md:gap-x-2 md:gap-y-2 main font-normal leading-[1.5]">
                            <span className=" text-gray-500  ">{item.title}</span>
                            <span className="">{item.text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default GetInTouch;
