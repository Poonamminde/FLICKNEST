import Slider, {settings} from "../../utils/slider.tsx";
import { FaArrowRight } from "react-icons/fa";
import { EVENTS } from "../../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
    return (
        <div className="w-full px-4 md:px-8">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                    The Best of live Events
                </h2>

                <button className="text-sm text-red-500 flex items-center hover:text-red-600">
                    View All
                    <FaArrowRight size={12} className="ml-2" />
                </button>
            </div>
            <Slider {...settings} className="-mx-2">
                {/* Event items will go here */}
                {EVENTS.map((event) => (
                    <div key={event.id} className="px-2">
                        <img src={event.image} alt={event.image} className="w-full h-[300px] rounded-lg object-cover" />
                        </div>
                ))}
            </Slider>
        </div>
    )
}

export default Events