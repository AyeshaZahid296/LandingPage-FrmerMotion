import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCopy } from "react-icons/fa";
import { blog, face } from "../../assets";
import AnimatedText from "../ui/AnimatedText";

const Blog = () => {
    const [showMore, setShowMore] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 968);

    //Dynamically track screen resize to update layout
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 968);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 text-gray-800 bg-white">
            {/* ---------- HEADER ---------- */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-10 w-full">
                {/* Title */}
                <AnimatedText
                    text="Introduction"
                    className="font-[Neighbor] h1 leading-[1]  font-medium text-black text-center md:text-left"
                />
                {/* Share Section */}
                <div className="flex flex-col items-center gap-3 text-[#212121] w-full md:w-auto">
                    <span className="small font-medium text-center">
                        Share this article:
                    </span>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="flex items-center justify-center text-[#212121] p-2 w-12 h-12 bg-gray-100 rounded-full hover:bg-[#3B4EDB] hover:text-white transition"
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                        <button
                            className="p-2 w-32 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#3B4EDB] hover:text-white transition"
                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                        >
                            <FaCopy size={14} />
                        </button>
                    </div>
                </div>

            </div>

            {/* ---------- MAIN CONTENT ---------- */}
            <div className="pr-2 sm:pr-6 md:pr-12 lg:pr-20 xl:pr-32  main space-y-6  leading-relaxed text-gray-700">
                <p>
                    Mi tincidunt elit, et, nisl sed sit. Vitae, vel et, diam amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.
                    Dictum mauris morbi et, sit. Tellus aliquam enim urna, etiam mauris posuere vulputate amet arcu, vel risus tincidunt. Id eget sapien
                    nullam sit.
                </p>

                <p>
                    Eget vitae in leo ac nibh pharetra, commodo egestas. Eget in vulputate lectus velit. Sed dolor, porttitor fames arcu augue quisque
                    vel quis. Quis at habitant diam at. Suscipit tristique risus, at donec in. Turpis vel sit quam imperdiet. Ipsum molestie aliquet
                    sodales sit ea volutpat.
                </p>

                {/* Image */}
                <div className="my-6">
                    <img src={blog} alt="Article illustration" className="w-full rounded-2xl object-cover" />
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 italic text-center sm:text-left">
                        Image caption goes here
                    </p>
                </div>

                <p>
                    Dui viverra eu tortor urna dui nulla. Aliquam vestibulum, nulla odio nisl vitae, in sit quam pellentesque arcu nam vestibulum turpis
                    in bibendum diam. Tempus integer aliquam in vitae malesuada fringilla.
                </p>

                {/* Read More section (visible on large or toggled mobile) */}
                {(showMore || isLargeScreen) && (
                    <>
                        <blockquote className="border-l-4 border-pink-400 bg-pink-50 text-gray-700 italic px-6 py-4 rounded-md">
                            “ Ipsum sit mattis nulla quam. Gravida id gravida ac enim mauris id nullam. Non pellentesque congue eget consectetur turpis.
                            Sapien, elit nullam sit donec. ”
                        </blockquote>

                        <p>
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit dui ultrices vitae ultricies volutpat morbi.
                            Faucibus donec placerat sit elit habitasse. Amet, in aliquet ut tellus non etiam cursus.
                        </p>
                    </>
                )}

                {/* Read More button (mobile only) */}
                {!isLargeScreen && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-block mt-4 text-[#3B4EDB] font-medium hover:underline md:hidden"
                    >
                        {showMore ? "Show less ↑" : "Read more →"}
                    </button>
                )}

                {/* ---------- CONCLUSION ---------- */}
                {(showMore || isLargeScreen) && (
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
                            Conclusion
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Morbi iaculis in ipsum, adipiscing elit dui lectus. Tincidunt sollicitudin et ultricies ut. Quis nisl, blandit vitae gravida
                            pharetra, aliquet. At gravida faucibus nunc, nunc. Adipiscing sit amet volutpat, facilisis varius risus imperdiet.
                        </p>
                    </div>
                )}

                {/* ---------- AUTHOR INFO ---------- */}
                {(showMore || isLargeScreen) && (
                    <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-5 border-t pt-4 sm:pt-5 w-full">

                        {/* Left: Author Avatar & Info */}
                        <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto">
                            <img
                                src={face}
                                alt="author"
                                className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-white/30 bg-[#1D5E48] shrink-0"
                            />
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-sm sm:text-lg md:text-xl text-black">
                                    Jan Jansen
                                </span>
                                <span className="font-medium text-black/40 text-xs sm:text-base">
                                    4 min leestijd
                                </span>
                            </div>
                        </div>

                        {/* Right: Tag Buttons - 2 columns on small screens */}
                        <div className="grid grid-cols-2 lg:flex flex-wrap justify-end gap-2 sm:gap-3 w-full lg:w-auto">
                            {["Klantdelingen", "Tips Tricks", "Vergelijken", "Vergelijken"].map(
                                (text, index) => (
                                    <button
                                        key={index}
                                        className="min-w-[120px] sm:min-w-[100px] px-3 sm:px-4 py-1.5 sm:py-2 
              rounded-[10px] border border-[#fe65d8fa] bg-[#FE65D9] 
              text-white font-medium text-xs sm:text-sm 
              flex items-center justify-center transition-all duration-300 
              hover:bg-[#3B4EDB] hover:text-white whitespace-nowrap"
                                    >
                                        {text}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
