import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";
import { artimg1, artimg2, artimg3 } from "../../assets";
import { MdArrowOutward } from "react-icons/md";

const articles = [
    {
        id: 1,
        title: "De beste tips voor verzekeringen",
        date: "April 10, 2024",
        description:
            "Leer hoe je de juiste verzekering kiest voor jouw situatie.",
        image: artimg1,
    },
    {
        id: 2,
        title: "De beste tips voor verzekeringen",
        date: "April 10, 2024",
        description:
            "Leer hoe je de juiste verzekering kiest voor jouw situatie.",
        image: artimg2,
    },
    {
        id: 3,
        title: "De beste tips voor verzekeringen",
        date: "April 10, 2024",
        description:
            "Leer hoe je de juiste verzekering kiest voor jouw situatie.",
        image: artimg3,
    },
];

export default function LatestArticles() {
    return (
        <section className="w-full py-0 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                {/* Header */}
                <div className="flex flex-col sm:flex-row text-[#212121] justify-center items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    <AnimatedText
                        text="Discover our"
                        className="font-[Neighbor] font-medium h2 leading-[1] tracking-[-0.02em] text-center sm:text-left"
                    />
                    <AnimatedText
                        text="latest articles"
                        className="font-[Neighbor] font-medium h2 leading-[1] tracking-[-0.02em] text-[#3B4EDB] text-center sm:text-left"
                    />
                </div>

                <p className="text-gray-500 mb-12 main leading-[1.5]">
                    Stay updated on trends and tips
                </p>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.id}
                            className="bg-white overflow-hidden transition-all duration-300 group rounded-2xl"
                        >
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-auto md:h-[414px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            <div className="pt-2 md:p-6 text-left text-[#212121]">
                                {/* Date + Arrow in one row */}
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[.8125rem]">
                                        Article · {article.date}
                                    </p>
                                    <MdArrowOutward className="md:w-6 md:h-[26px] text-[#212121] text-lg" />
                                </div>

                                <h5 className="font-[Neighbor] font-medium h5 mb-2 leading-[1.1] md:leading-tight">
                                    {article.title}
                                </h5>
                                <p className="main mb-4 leading-[1.5]">
                                    {article.description}
                                </p>
                            </div>
                        </motion.div>


                    ))}
                </div>
            </div>
        </section>
    );
}
