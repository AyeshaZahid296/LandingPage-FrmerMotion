import React from "react";
import { useNavigate } from "react-router-dom";

const SliderCard = ({ image, title, description, height }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/blogdetail");
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer duration-300 h-full flex flex-col"
        >
            <img
                src={image}
                alt={title}
                className="w-full object-cover rounded-t-2xl overflow-hidden transition-transform duration-500 ease-[cubic-bezier(.7,0,.3,1)] hover:scale-105"
                style={{ height: `${height}px` }}
            />

            <div className="flex flex-col gap-2 px-3 py-4 flex-grow">
                <h5 className="font-[Neighbor] h5 text-gray-900 line-clamp-2">
                    {title}
                </h5>
                <p className="text-gray-600 leading-[1.5] line-clamp-2 main">
                    {description}
                </p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}
                    className="text-green-600 font-[Neighbor] main inline-flex items-center gap-1 "
                >
                    Read More →
                </button>
            </div>
        </div>
    );
};

export default SliderCard;
