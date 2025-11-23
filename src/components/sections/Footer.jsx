import React from "react";
import FooterTopSection from "./FooterTopSection";
import RoundedButton from "../ui/RoundedButton";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VectorImage } from "../../assets";
import FooterSection from "../ui/FooterSection";

const Footer = () => {
    const sections = {
        Compare: [
            "Car Insurance",
            "Home Insurance",
            "Travel Insurance",
            "Energy Plans",
            "Mobile & Internet",
            "Banking & Loans",
            "All Categories",
        ],
        Learn: [
            "Insurance Guide",
            "Energy Saving Tips",
            "Financial Planning",
            "How Comparison Works",
            "Consumer Rights",
            "Market News",
        ],
        About: [
            "Our Story",
            "Why We're Independent",
            "How We Make Money",
            "Press & Media",
            "Careers",
            "Awards & Recognition",
        ],
        Support: [
            "Help Center",
            "Contact Us",
            "Live Chat",
            "FAQs",
            "Filing a Complaint",
            "Feedback",
        ],
    };

    return (
        <div className="relative flex flex-col items-center w-full m-0 p-0">
            <footer
                className="relative w-full bg-[#0C0C0C] text-white/80 overflow-hidden z-20 
                p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20"
            >
                {/* 🔹 Buttons Row */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-4 mb-8 md:mb-10 w-full">

                    {/* 🔹 Buttons Group - Mobile Column Layout */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 font-normal leading-[1.5] w-full md:w-auto">
                        {["Home", "Blogs", "Vergelijkingen", "Over ons"].map((text, i) => {
                            // Determine if this is the current page
                            const isCurrentPage = text === "Home"; // Change this based on your current page logic

                            return (
                                <RoundedButton
                                    key={i}
                                    text={text}
                                    className={`min-w-[140px] sm:min-w-[120px] md:min-w-[150px] py-2 text-sm sm:text-base transition-all duration-300 hover:scale-105
                        ${isCurrentPage
                                            ? "border border-white text-white"
                                            : "border border-transparent text-white/80 hover:text-white"
                                        }`}
                                />
                            );
                        })}
                    </div>

                    {/* 🔹 Email Subscribe */}
                    <div className="flex flex-row items-center justify-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent border-b border-white/40 px-3 py-2 w-full sm:w-[250px] focus:outline-none focus:border-white/80 text-white/80 placeholder-white/50 text-center sm:text-left"
                        />
                        <button className="hover:bg-white/5 px-4 py-2 flex items-center justify-center transition">
                            <ArrowRight className="w-5 h-5 -rotate-45 hover:rotate-0 transition-transform text-white/80" />
                        </button>
                    </div>

                </div>

                {/* 🔸 Footer Grid (Visible on all screens) */}
                <div
                    className="
                        grid 
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                        gap-6 sm:gap-8 md:gap-10 mb-10 w-full
                    "
                >
                    {Object.entries(sections).map(([title, items]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-xl text-white mb-3">{title}</h3>
                            <ul className="space-y-2 font-medium">
                                {items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="relative group cursor-pointer overflow-hidden"
                                    >
                                        <span
                                            className="
                                                inline-block
                                                text-white/70
                                                font-light
                                                group-hover:text-white
                                                group-hover:translate-x-2
                                                group-hover:font-normal
                                                transform
                                                transition-all
                                                duration-300
                                                ease-in-out
                                            "
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-xl text-white mb-3">Contact Information</h3>
                        <p className="text-white/70 font-light pb-1 group hover:text-white transition-colors duration-300 cursor-pointer">
                            <span className="font-semibold">Address:</span> Amsterdam, Netherlands
                        </p>
                        <p className="text-white/70 font-light pb-1 group hover:text-white transition-colors duration-300 cursor-pointer">
                            <span className="font-semibold">Phone:</span> 020-123-4567
                        </p>
                        <p className="text-white/70 font-light pb-1 group hover:text-white transition-colors duration-300 cursor-pointer">
                            <span className="font-semibold">Mail:</span> help@vergelijker.nl
                        </p>
                    </div>
                </div>

                {/* 🔻 Bottom Bar */}
                <div className="pt-4">
                    <img src={VectorImage} alt="vector" className="hidden md:block w-full h-auto mb-4" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4 justify-center items-center">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0C0C0C] text-white/70 ring-1 ring-white/50 hover:text-white hover:ring-white hover:scale-110 transition-all duration-300"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>

                        <p className="text-xs md:text-sm text-white/60 text-center">
                            © {new Date().getFullYear()} Vergelijker Engels. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;