import SliderLib from "react-slick";
import Arrow from "../components/shared/Arrow";

const Slider = (SliderLib as any).default || SliderLib;

export const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
};
export default Slider;