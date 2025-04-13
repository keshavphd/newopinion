import React, { use } from "react";
import { useSelector } from "react-redux";
import FormSlide from "../assets/FormSlide";
import { BiSolidUser } from "react-icons/bi";

const Dasboard = () => {
  const user = useSelector((state) => state?.user);
  console.log("fdhg", user);
  const formdils =
    user?.formdill1 +
    user?.formdill2 +
    user?.formdill3 +
    user?.formdill4 +
    user?.formdill5;
  const formdills =
    user?.formdill1 +
    user?.formdill +
    user?.formdill2 +
    user?.formdill3 +
    user?.formdill4 +
    user?.formdill5;
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex flex-col items-center w-full lg:flex-row ">
        <div className="lg:w-[40%] w-full sm:w-full lg:mt-10 mt-30 md:mt-14 p-2">
          <div className="relative flex flex-col gap-2 p-2 pt-24 shadow-md rounded-xl bg-amber-100">
            <div className="text-2xl font-semibold text-center">
              {user.firstname} {user.lastname}
            </div>
            <p className="text-center">
              Get
              {" " + Math.floor(1200 - (200 + formdills * 10)) + " "}
              more point to redeem
            </p>
            <p className="text-center mx-2 border-[.5px] opacity-20 border-amber-900"></p>
            <div className="text-xl font-semibold text-center">
              Point Credited :{" " + (200 + formdills * 10)}
            </div>
            <p className="text-xs text-center">
              <i>100 Points = 1 USD</i>
            </p>
            <button className="px-2 py-1 text-center bg-neutral-300 rounded-4xl">
              REDEEM NOW
            </button>
            <div className="absolute flex justify-center w-full -top-12">
              <div className="flex items-center justify-center rounded-full w-28 h-28 bg-amber-400">
                <BiSolidUser size={90} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 ">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">In House Survey</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/inhouse.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">External Survey</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/external.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">{formdils}</h1>
                <p className="text-xs font-semibold">Survey Participated</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/participation.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">Monthly Survey</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/monthly.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">Quarterly Survey</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/quarterly.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">1</h1>
                <p className="text-xs font-semibold">Yearly Survey</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/yearly.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">
                  {(200 + formdills * 10) / 100}$
                </h1>
                <p className="text-xs font-semibold">Value generated</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/1usd.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">Quarterly Claimed</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/2usd.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">0</h1>
                <p className="text-xs font-semibold">Yearly Claimed</p>
              </div>
              <div>
                <img
                  src="https://turn2opinion.com/img/4usd.png"
                  className="w-16 p-2 bg-white rounded-full"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <FormSlide />
      </div>
    </div>
  );
};

export default Dasboard;
