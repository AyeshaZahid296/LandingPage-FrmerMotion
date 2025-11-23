import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderCard from "./SliderCard";

const Slider = ({ items }) => {
    const scrollRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(350);

    useEffect(() => {
        const updateDimensions = () => {
            if (scrollRef.current) {
                const firstCard = scrollRef.current.querySelector(".slider-card");

                if (firstCard) {
                    // Card width + gap (24px) calculate karen
                    const calculatedCardWidth = firstCard.offsetWidth + 24;
                    setCardWidth(calculatedCardWidth);
                }
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            // HAMESHA exactly 1 card shift karen
            const scrollAmount = cardWidth;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Dynamically adjust image heights based on screen width
    const getHeights = () => {
        const width = window.innerWidth;

        if (width < 640) {
            return [300, 240, 260];
        } else if (width < 1024) {
            return [400, 320, 350];
        } else {
            return [586, 390, 484];
        }
    };

    const heights = getHeights();

    return (
        <div className="relative w-full">
            {/* Cards Container - Scroll bar hidden */}
            <div
                ref={scrollRef}
                className="flex items-center gap-6 overflow-x-auto scroll-smooth px-4"
                style={{
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE and Edge
                }}
            >
                {/* Custom CSS for Webkit browsers (Chrome, Safari) */}
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {items.map((item, i) => (
                    <div
                        key={i}
                        className="slider-card flex-shrink-0"
                        style={{
                            width: "clamp(250px, 30vw, 400px)",
                        }}
                    >
                        <SliderCard {...item} height={heights[i % heights.length]} />
                    </div>
                ))}
            </div>

            {/* Navigation buttons - Mobile: center, Desktop: end */}
            <div className="flex gap-4 pt-6 justify-center md:justify-end px-6">
                <button
                    onClick={() => scroll("left")}
                    className="flex items-center justify-center gap-2 w-28 px-4 py-2 border border-gray-300 rounded-full transition hover:bg-[#3B4EDB] hover:text-white"
                >
                    <FaArrowLeftLong /> Prev
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="flex items-center justify-center gap-2 w-28 px-4 py-2 border border-gray-300 rounded-full transition hover:bg-[#3B4EDB] hover:text-white"
                >
                    Next <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
};

export default Slider;