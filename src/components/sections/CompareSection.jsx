import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const stats = [
  { id: 1, value: "2.3M+", label: "comparisons completed", tilt: "rotate-6" },
  { id: 2, value: "€12M+", label: "total savings generated", tilt: "rotate-6" },
  { id: 3, value: "150+", label: "providers compared", tilt: "rotate-14" },
  { id: 4, value: "9.4/10", label: "average user rating", tilt: "-rotate-14" },
];

const CompareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // 🎬 Controls for triggering animation manually
  const controls = useAnimation();

  // 🔁 Run animation every time the section enters view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.15 * i,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="w-full flex flex-col items-center justify-center 
                 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-0 relative"
    >
      {/* 🔹 TOP TWO CARDS */}
      <div
        className="
          grid grid-cols-2 
          gap-4 sm:gap-8 lg:gap-[68px] 
          mb-8 sm:mb-12 lg:mb-[68px]
          max-w-full lg:max-w-none
        "
      >
        {stats.slice(0, 2).map((stat, index) => (
          <motion.div
            key={stat.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={`
              bg-[#F8F8F8] text-[#1D5E48] rounded-2xl text-center cursor-pointer
              ${stat.tilt}
              w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]
              p-4 sm:p-6
            `}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              backgroundColor: "#3B4EDB",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
              color: "#fff",
              transition: { duration: 0.25 },
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-[Neighbor] font-semibold 
                             h3
                             leading-[1] tracking-[-0.04em]">
                {stat.value}
              </h2>
              <p className="font-[Geist] font-normal main 
                            leading-[110%] tracking-[-0.04em] mt-2">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 CENTER TEXT */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
        }}
        initial="hidden"
        animate={controls}
        className="
          font-[Neighbor] font-medium h3
          leading-[1.1] tracking-[-0.04em] text-center
          max-w-[900px] px-2 sm:px-4 lg:px-0
          mb-6 sm:mb-8 lg:mb-6
        "
      >
        We help you find the perfect match in seconds. 100% independent, crystal clear, and
        designed to make smarter choices effortlessly.
      </motion.p>

      {/* 🔹 BUTTON */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
        }}
        initial="hidden"
        animate={controls}
        className="lg:mt-4"
      >
        <AnimatedButton className="main font-medium" />
      </motion.div>

      {/* 🔹 BOTTOM TWO CARDS */}
      <div
        className="
          grid grid-cols-2 
          gap-4 sm:gap-8 lg:gap-[208px]
          mt-8 sm:mt-12 lg:mt-8
          max-w-full lg:max-w-none
        "
      >
        {stats.slice(2, 4).map((stat, index) => (
          <motion.div
            key={stat.id}
            custom={index + 2}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={`
              bg-[#F8F8F8] text-[#1D5E48] rounded-2xl text-center cursor-pointer
              ${stat.tilt}
              w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]
              p-4 sm:p-6
            `}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              backgroundColor: "#3B4EDB",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
              color: "#fff",
              transition: { duration: 0.25 },
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-[Neighbor] font-medium h2
                             leading-[100%] tracking-[-0.04em]">
                {stat.value}
              </h2>
              <p className="font-[Geist] font-normal 
                            main
                            leading-[110%] tracking-[-0.04em] mt-2">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompareSection;
