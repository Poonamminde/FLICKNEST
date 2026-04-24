import Slider from "../../utils/slider.tsx";
import { BANNERS } from "../../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: false,
    dots: true,
  };
  return (
    <div className="w-full py-6">
      <div className="mx-auto ">
    <Slider {...settings}>
      {BANNERS.map((banner) => (
        <div key={banner} className="px-2">
          <img src={banner} alt={banner} className="w-full h-[300px] rounded-xl object-cover"/>
        </div>
      ))}

    </Slider>
    </div>
    </div>
  );
}