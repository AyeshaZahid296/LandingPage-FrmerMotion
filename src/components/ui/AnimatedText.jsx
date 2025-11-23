"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedText = ({ text, className = "", align = "start" }) => {
    const words = text.split(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    const letterVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.02,
                duration: 0.2,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div
            ref={ref}
            className={`flex flex-wrap gap-x-2 justify-${align}`}
        >
            {words.map((word, wi) => (
                <span key={wi} className="flex">
                    {word.split("").map((letter, li) => (
                        <motion.span
                            key={li}
                            variants={letterVariant}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            custom={wi * 10 + li}
                            className={className}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;
