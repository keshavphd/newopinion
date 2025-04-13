import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import sidemenuReducer from "./SideBar"

const store = configureStore({
  reducer: {
    user: userReducer,
    sidemenu:sidemenuReducer,
  },
});
export default store;