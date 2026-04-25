import React from "react";
import Slider, { settings } from "../../utils/slider.tsx";
import { FaArrowRight } from "react-icons/fa";
import { MOVIES } from "../../constants";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies: React.FC = () => {

    return (
        <div className="w-full px-4 md:px-8">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Recommended Movies
                </h2>

                <Link to="/movies">
                    <button className="text-sm text-red-500 flex items-center cursor-pointer hover:text-red-600">
                        View All
                        <FaArrowRight size={12} className="ml-2" />
                    </button>
                </Link>
            </div>

            {/* Slider */}
            <div className="relative group">
                <Slider {...settings} className="-mx-2">
                    {MOVIES.map((movie) => (
                        <div key={movie.id} className="px-2">
                            <div className="shadow hover:scale-105 transition duration-300 overflow-hidden">

                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-[300px] md:h-[380px] object-cover rounded-lg"
                                />

                                <div className="p-2">
                                    <h3 className="text-sm font-medium line-clamp-1">
                                        {movie.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs">
                                        ⭐ {movie.rating}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Movies;