import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import SummaryAPI, { Axios } from "../utils/Axios";
import { setUserDetails } from "../store/UserSlice";
import GlobalProvider from "../Provider/GlobalProvider";

const Applayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const value = localStorage.getItem("token") != null;
  const loggedIn = value;

  const fetchUser = async () => {
    const data = await Axios({
      ...SummaryAPI.getUser
    })
    navigate("/dashboard/dasboard");
    dispatch(setUserDetails(data.data.data));
  };

  useEffect(() => {
    if (loggedIn) {
      fetchUser();
    }
  }, [loggedIn]);

  return (
    <GlobalProvider>
      <div className="w-full">
        <Header className="w-full" />
        <main className="w-full min-h-screen">
          <Outlet />
        </main>
        <Footer className="w-full" />
        <Toaster />
      </div>
    </GlobalProvider>
  );
};

export default Applayout;
