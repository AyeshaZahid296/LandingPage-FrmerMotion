"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedFace = ({ src, className = "", delay = 0 }) => {
    const variants = {
        initial: {
            rotate: [0, -4, 4, -2, 2, 0],
            // y: [0, -6, 0, 6, 0],
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            },
        },
        hover: {
            rotate: [0, -10, 10, -6, 6, 0],
            // y: [0, -12, 0, 12, 0],
            transition: {
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            },
        },
    };

    return (
        <motion.img
            src={src}
            alt="face"
            className={className}
            variants={variants}
            initial="initial"
            animate="initial"
            whileHover="hover"
        />
    );
};

export default AnimatedFace;
