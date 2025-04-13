import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HoverTemplate = () => {
  const [isPaused, setIsPaused] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 2000,
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
      title:
        "I really enjoy taking surveys through Turn2opinion. I feel they offer great promotions and reward their users very well. They also have an amazing customer service with timely responses and great follow through. Thank you!",
      subtitle: "Gaera (United States)",
    },
    {
      title:
        "I've been using turn2opinion for around 4 or 5 years now, and not once in those years have I had a bad experience. Plenty of different survey engines to work from, and if you don't want to do surveys then you're free to do offers and play mobile games.",
      subtitle: "Gavin (United States)",
    },
    {
      title:
        "If you like taking surveys this has to be the site for you. There's always plenty of surveys and the money soon mounts up. You can cash out with as little as a $2 via paypal which is far better than sites that make you hang on until you've hit $20+.",
      subtitle: "Geetika (India)",
    },
    {
      title:
        "Whoa, I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion.I was so excited when I checked my mail today! Thanks so much, turn2opinion.",
      subtitle: "Wei (China)",
    },
    {
      title:
        "Earn money is never been so easy before, It's very good to share my opinion and get excellent rewards point. I'm so happy to earn money from Frequent Reward.I was so excited when I checked my mail today! Thanks so much, turn2opinion.",
      subtitle: "Praveen Mehta (India)",
    },
    {
      title:
        "The clear design and technical functionality of the surveys are excellent! Very impressive function to explore more surveys.I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion.",
      subtitle: "Eadfrith (United Kingdom)",
    },
    {
      title:
        "Quick redemption. Cheers I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion.I was so excited when I checked my mail today! Thanks so much, turn2opinion.",
      subtitle: "Smith (United States)",
    },
    {
      title:
        "Easy process for registration, impressive payoff for our feedback I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion My $12 credit reedeem at my paypal account so quickly!.",
      subtitle: "Oscar (United States)",
    },
    {
      title:
        "Amazing website and one of Best surveys website I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion.I was so excited account so quickly! Thanks so much, turn2opinion.",
      subtitle: "Amanda (France)",
    },
    {
      title:
        "That's nice website give extra money for interesting services I was so excited when I checked my mail today! My $12 credit reedeem at my paypal account so quickly! Thanks so much, turn2opinion I checked my mail today! Thanks so much, turn2opinion.",
      subtitle: "Haden (Germany)",
    },
  ];

  return (
    <div className="items-center content-center w-full h-full p-10 bg-white lg:p-30 rounded-2xl lg:rounded-full">
      <div className="justify-center text-center h-80">
        <div className="items-justify">
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
              <div
                key={index}
                className="grid items-center justify-center h-full place-content-center place-items-center"
              >
                <h3 className="text-base font-semibold lg:text-2xl">
                  {slide.title}
                </h3>
                <p className="pt-5">{slide.subtitle}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HoverTemplate;
