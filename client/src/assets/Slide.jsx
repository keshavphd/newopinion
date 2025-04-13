import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleTouchMove = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const slideData = [
    {
      textdesign: "We value your feedback",
      title: "Your opinion gets rewarded",
      subtitle:
        "Our service will give you more opportunities to enhance your knowledge and experience. Our community gives a high value monitory rewards on sharing your thought, knowledge and experiences",
    },
    {
      textdesign: "Let's make your opinion reach the world",
      title: "Earn more & more money with us",
      subtitle:
        "Your experiences and loyal feedback will help Global Industrial Clients to improve their product and services with a new innovative approach",
    },
    {
      textdesign: "Make fast and easy money with us",
      title: "Simple way to generate more cash rewards",
      subtitle:
        " We have a very easy process to make you rewarded for your efforts and time with a high value incentives in just a very simple three step process i.e. → Free registration, → Quick survey Participation and → Earn Rewards",
    },
  ];

  return (
    <div className="w-full h-full ">
    <div className="">
      <Slider
        {...settings}
        onMouseDown={handleMouseDown} // For mouse interactions
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove} // Track the swipe movement
        onTouchEnd={handleTouchEnd} // Detect the end of a swipe gesture
        onTouchStart={handleTouchMove} // Pause on touch start
        onTouchCancel={handleTouchEnd} // Handle interrupted touches
      >
          {slideData.map((slide, index) => (
          <div key={index} className="mb-2 text-center">
            <h3 className="text-4xl font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">{slide.title}</span> {slide.textdesign}</h3>
            
            <p className="pt-5 text-xl">{slide.subtitle}</p>
          </div>
        ))}
        
      </Slider>
    </div>
  </div>
)
};

export default Slide;
