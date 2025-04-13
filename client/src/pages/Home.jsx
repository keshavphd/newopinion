import React, { useEffect, useRef, useState } from "react";
import Slide from "../assets/Slide";
import { BsCheck2Circle } from "react-icons/bs";
import Statistics from "../assets/Template";
import NewPage from "../assets/NewPage";
import HoverTemplate from "../assets/HoverTemplate";
import Login from "./Login";
import Si from "./Si";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
 const location = useLocation();

  const { ids } = useParams();
  if(location.pathname.slice(1)!==""){
    localStorage.setItem("referal",location.pathname.slice(1))
  }else{
    localStorage.setItem("referal",null)
  }

  
  const handleLogin = () => {
    setOpenSignUp(false);
    setOpenLogin(true);
  };

  return (
    <div className="overflow-hidden top-18">
      {openLogin && (
        <Login
          close={() => setOpenLogin(false)}
          open={() => {
            setOpenSignUp(false);
            setOpenLogin(true);
          }}
          opensignup={() => {
            setOpenLogin(false);
            setOpenSignUp(true);
          }}
        />
      )}
      {openSignUp && (
        <Si
        clientID = {null} 
          close={() => setOpenSignUp(false)}
          opens={() => {
            setOpenLogin(false);
            setOpenSignUp(true);
          }}
          openlogin={() => {
            setOpenSignUp(false);
            setOpenLogin(true);
          }}
        />
      )}
      <div className="flex flex-row items-center content-between justify-between pt-15 md:pt-20 lg:h-screen h-[80%] bg-gradient-to-r from-neutral-50 to-amber-200">
        <div className="flex flex-col justify-between h-full">
          <div className="w-full">
            <img
              src="https://turn2opinion.com/images/survey.png"
              width={120}
              alt="image"
            />
          </div>
          <img
            src="https://turn2opinion.com/images/banner3.png"
            alt="image"
            width={200}
          />
        </div>

        <div className="lg:w-[60%] py-6 px-5 w-full">
          <Slide />
          <div className="w-full pt-6 text-center">
            <button onClick={handleLogin} className="p-3 px-5 font-semibold text-white rounded-full w-fit bg-gradient-to-b from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500">
              JOIN NOW
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full ">
          <div className=" pt-6 -rotate-[20deg]">
            <img
              src=" https://turn2opinion.com/images/thumb.png"
              width={120}
              alt="image"
            />
          </div>

          <img
            src="https://turn2opinion.com/images/banner4.png"
            alt="image"
            width={200}
          />
        </div>
      </div>
      <div className="flex flex-col content-center justify-center w-full pt-8 bg-gradient-to-r from-neutral-50 to-amber-50">
        <div className="flex items-center content-center justify-center w-full text-center">
          <div className="w-24">
            <img src="https://turn2opinion.com/images/icon-review.png" alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center sm:text-4xl md:text-3xl lg:text-4xl lg:px-52">
            We are a part of
            <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">
              Frequent Research Fieldwork Solutions Private Limited
            </span>
            , An Online Market Research Panel and Full Service Research Company
          </h3>
          <p className="pb-12 text-xl text-center lg:px-40">
            Our Turn2Opinion community members consist of Consumers and Business
            people, We are shaping to become one of the world's largest Consumer
            & Business panel and a premier global online research sample
            provider of Business & Consumer research information to The World
            organisations to take a quality respondent of their choice.
          </p>
        </div>
      </div>
      <div className="flex justify-between px-8 pt-10 bg-gradient-to-r from-neutral-50 to-amber-200">
        <div>
          <div className="w-24">
            <img
              src="https://turn2opinion.com/images/journey-icon.png"
              alt=""
            />
          </div>
          <div className="lg:w-[90%]">
            <h3>
              <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">
                Journey From Free Joining To Rewards Claiming
              </span>
            </h3>
            <ul>
              <li className="flex gap-1">
                {" "}
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                Create a free account via your active E-mail ID & valid Contact
                Number.
              </li>
              <li className="flex gap-1">
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                You will receive a verification link to verify your email and
                contact number with OTP.
              </li>
              <li className="flex gap-1">
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                After verify you will be able to access the available surveys.
              </li>
              <li className="flex gap-1">
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                To earn more rewards and to have access maximum surveys per week
                you need to complete all your Profiles Particulars.
              </li>
              <li className="flex gap-1">
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                As soon as you complete your profiles you would be able to
                achieve your threshold amount to claim.
              </li>
              <li className="flex gap-1">
                <div className="font-bold text-red-400">
                  <BsCheck2Circle size={20} />
                </div>
                Once you achieve your threshold you will be able to claim your
                rewards money via Paypal, Gift-vouchers , or it can be directly
                transfers to your account as per request and availability.
              </li>
            </ul>
          </div>
          <div className="w-full py-5 text-center lg:w-fit">
            <button onClick={handleLogin} className="p-3 px-5 font-semibold text-white rounded-full w-fit bg-gradient-to-b from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500">
              I WANT TO JOIN
            </button>
          </div>
        </div>

        <div className="content-center hidden lg:block">
          <div className="flex items-center content-center justify-center py-12 ">
            <img src="https://turn2opinion.com/images/journey.png" alt="icon" />
          </div>
        </div>
      </div>
      <div className="items-center content-center justify-center block py-12 bg-gradient-to-r from-neutral-50 to-amber-200 md:hidden lg:hidden ">
        <img src="https://turn2opinion.com/images/journey.png" alt="icon" />
      </div>
      <div className="bg-gradient-to-r from-neutral-50 to-amber-200">
        <Statistics />
      </div>
      <div className="flex-row lg:flex bg-gradient-to-r from-neutral-50 to-amber-200">
        <div className="lg:w-[40%] w-full mx-auto lg:flex lg:justify-center lg:items-center">
          <img src="https://i.ibb.co/MWgKh9F/Screenshot-213.png" alt="" />
        </div>
        <div className="lg:w-[60%] lg:p-10 p-3">
          <div className="w-24">
            <img src="https://turn2opinion.com/images/who-icon.png" alt="" />
          </div>
          <div>
            <h3>
              <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">
                Who We Are
              </span>
            </h3>
            <p className="pb-2 text-xl text-justify ">
              We offer you no limit of earning surveys that need answering for
              brands, governments, agencies and institutions and you get paid
              for contributing to these surveys and polls. We reward our members
              with a choice of cash via Paypal or gift vouchers, including
              Amazon and other vouchers .
            </p>
            <p className="pb-2 text-xl text-justify ">
              Our surveys campaigns are interesting short in length , fun to do
              and can be taken on mobile as well as on other devices on the
              move, or at home on your desktop. We give maximum offers in a day
              to earn you hassle free income.
            </p>
          </div>
          <div className="w-full py-5 text-center lg:w-fit">
            <button className="p-3 px-5 font-semibold text-white rounded-full w-fit bg-gradient-to-b from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div id="scrollhere">
        <NewPage login={()=>setOpenLogin(true)}/>
      </div>

      <div className="flex items-center justify-center py-8 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqBklIIl7UUlCIIMg_Wxt1tfOFBIf2wtFVQ&s')] bg-object-scale-down bg-fixed bg-center">
        <div className="lg:w-[46%] flex items-center justify-center  h-fit content-center w-[80%] lg:mx-0">
          <HoverTemplate />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-5 lg:px-22 lg:flex-row">
        <div className="lg:px-8 w-60 lg:pt-6 flex justify-center items-center lg:items-end lg:text-end lg:-rotate-[0deg]">
          <img
            src=" https://turn2opinion.com/images/thumb.png"
            width={200}
            alt="image"
          />
        </div>

        <div className="flex flex-col items-center h-full text-center py-7 bg-amber-20">
          <h3 className="text-2xl font-semibold text-center sm:text-4xl md:text-3xl lg:text-4xl">
            <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">
              Lets Get Started
            </span>
          </h3>
          <p className="text-xl text-center lg:px-2">
            Be our community member and get rewarded with points and credit your
            paypal account after your loyal inputs.
          </p>
        </div>
        <div className="flex items-center text-center lg:mr-17">
          <button onClick={handleLogin} className="p-3 px-5 font-semibold text-white rounded-full w-39 bg-gradient-to-b from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
