import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="z-10 flex flex-col w-full h-screen text-start">
      <Link to={"/dashboard/dasboard"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Dashboard</Link>
      <Link to={"/dashboard/myaccount"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">My Account</Link>
      <Link to={"/dashboard/profile"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Profiles</Link>
      <Link to={"/dashboard/surveys"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Surveys</Link>
      <Link to={"/dashboard/rewards"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Rewards</Link>
      <Link to={"/dashboard/referal"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Referal</Link>
      <Link to={"/dashboard/setting"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Setting</Link>
      <Link to={"/dashboard/support"} className="border-b-[1px] mt-1 hover:border-b-0 border-neutral-300 border-l-4 hover:border-amber-500 p-3.5 font-semibold hover:bg-orange-200">Support</Link>
    </div>
  );
};

export default SideMenu;
