import React from 'react';
import { motion } from 'framer-motion';
import { Logo1, Logo2 } from '../../assets';

const initialIcons = [
    { id: 1, icon: Logo1 },
    { id: 2, icon: Logo2 },
];

const duplicatedIcons = [
    ...initialIcons.map(icon => ({ ...icon, key: `a-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `b-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `c-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `d-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `e-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `f-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `g-${icon.id}` })),
    ...initialIcons.map(icon => ({ ...icon, key: `h-${icon.id}` })),
];

const BrandSection = () => {
    return (
        <div className="py-12">
            <h4 className="font-[Neighbor] font-normal main leading-[1.5] tracking-normal text-center mb-10">
                "We work with the Netherlands' most trusted Brands"
            </h4>

            <div className="relative overflow-hidden w-full h-20">
                {/* Gradient overlays */}
                <div className="absolute z-10 top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute z-10 top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent"></div>

                {/* Framer Motion Marquee */}
                <motion.div
                    className="flex absolute left-0 h-full items-center"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {duplicatedIcons.map((item) => (
                        <div
                            key={item.key}
                            className="flex-shrink-0 flex items-center justify-center w-28 h-7 text-gray-700 mx-8"
                        >
                            <img
                                src={item.icon}
                                alt={`Brand Logo ${item.id}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default BrandSection;