import React, { useEffect, useRef, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { FcClapperboard } from "react-icons/fc";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Basic from "../forms/basic";
import Educational from "../forms/Educational";
import Financial from "../forms/Financial";
import Shopping from "../forms/Shopping";
import Lse from "../forms/Lse";
import { useSelector } from "react-redux";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute w-14 h-14 p-3 shadow-lg top-4.5 -left-10 md:-left-16 rounded-full"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <FaArrowLeftLong size={29} />
      </div>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute w-14 h-14 p-3 shadow-lg top-4.5 -right-10 md:-right-16 rounded-full"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <FaArrowRightLong size={29} />
      </div>
    </div>
  );
};

const ProfileSlide = () => {
  const user = useSelector((state) => state?.user);
  const formdills =
    user?.formdill1 + user?.formdill2 + user?.formdill3 + user?.formdill4 + user?.formdill5;
  const [activeSlides, setActiveSlides] = useState("Basic");
  const [formFilledStatus, setFormFilledStatus] = useState({
    Basic: false,
    Educational: false,
    Financial: false,
    "Lifestyle & Entertainment": false,
    Shopping: false,
  });

  const formFilledStatusRef = useRef(formFilledStatus);

  useEffect(() => {
    formFilledStatusRef.current = formFilledStatus;
  }, [formFilledStatus]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <CustomNextArrow />, // Pass custom next arrow
    prevArrow: <CustomPrevArrow />, // Pass custom previous arrow
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1, // Show one slide at a time
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Enable dots for better navigation on mobile
        },
      },
    ],
  };

  const slideData = [
    {
      image: <RiProfileLine size={32} />,
      name: "Basic",
    },
    {
      image: <FaBookReader size={32} />,
      name: "Educational",
    },
    {
      image: <MdAccountBalance size={32} />,
      name: "Financial",
    },
    {
      image: <FcClapperboard size={32} />,
      name: "Lifestyle & Entertainment",
    },
    {
      image: <PiShoppingCartSimpleFill size={32} />,
      name: "Shopping",
    },
  ];

  const setFormAsFilled = (formName) => {
    setFormFilledStatus((prev) => ({
      ...prev,
      [formName]: true,
    }));
  };

  const renderSlide = () => {
    switch (activeSlides) {
      case "Basic":
        return <Basic onFormSubmit={() => setFormAsFilled("Basic")} />;
      case "Educational":
        return (
          <Educational onFormSubmit={() => setFormAsFilled("Educational")} />
        );
      case "Financial":
        return (
          <Financial onFormSubmit={() => setFormAsFilled("Financial")} />
        );
      case "Lifestyle & Entertainment":
        return (
          <Lse
            onFormSubmit={() => setFormAsFilled("Lifestyle & Entertainment")}
          />
        );
      case "Shopping":
        return <Shopping onFormSubmit={() => setFormAsFilled("Shopping")} />;
      default:
        return null;
    }
  };

  const countFilledForms = () => {
    return Object.values(formFilledStatus).filter((status) => status).length;
  };

//   const countFilledForms = () => {
//     return formsData.filter((form) => {
//       // Check if any field in the form is filled
//       return Object.values(form.fields).some((value) => value.trim() !== "");
//     }).length;
//   };
// console.log("hi",countFilledForms);


  return (
    <>
      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
          {slideData.map((data, index) => (
            <div
              key={index}
              onClick={() => setActiveSlides(data?.name)}
              className={`m-0 cursor-pointer `}
            >
              <div
                className={`flex gap-2 p-2 m-4 rounded-2xl ${
                  activeSlides == data.name
                    ? "bg-blue-800 text-white"
                    : "bg-cyan-200"
                }`}
              >
                <div className={``}>{data?.image}</div>
                <div className="flex flex-col w-full gap-3">
                  <div>{data?.name}</div>
                  <div className="border-4 border-amber-400 rounded-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-5 w-[90%] mx-auto">{renderSlide()}</div>

      <div className="mt-4 text-center">
        <h2>
          Filled Forms: {formdills} / {slideData.length}
        </h2>
      </div>
    </>
  );
};

export default ProfileSlide;
