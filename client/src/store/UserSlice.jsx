import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  _id: "",
  age: "",
  dateOfBirth: "",
  email: "",
  firstname: "",
  gender: "",
  lastname: "",
  mobile: "",
  numberofsurvey: "",
  surveycompleted: "",
  amountearned: "",
  createdAt :"",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUserDetails: (state, action) => {
      state.firstname = action.payload?.firstname;
      state.email = action.payload?.email;
      state._id = action.payload?._id;
      state.lastname = action.payload?.lastname;
      state.mobile = action.payload?.mobile;
      state.age = action.payload?.age;
      state.gender = action.payload?.gender;
      state.dateOfBirth = action.payload?.dateOfBirth;
      state.numberofsurvey = action.payload?.numberofsurvey;
      state.surveycompleted = action.payload?.surveycompleted;
      state.createdAt = action.payload?.createdAt;
      state.amountearned = action.payload?.amountearned;
      state.country = action.payload?.country;
      state.state = action.payload?.state;
      state.city = action.payload?.city;
      state.alternatenumber = action.payload?.alternatenumber;
      state.ethnicity = action.payload?.ethnicity;
      state.origin = action.payload?.origin;
      state.pincode = action.payload?.pincode;
      state.rstatus = action.payload?.rstatus;
      state.workemail = action.payload?.workemail;
      state.educationlevel = action.payload?.educationlevel;
      state.enroll = action.payload?.enroll;
      state.institute = action.payload?.institute;
      state.onlineclasses = action.payload?.onlineclasses;
      state.consider = action.payload?.consider;
      state.decisin = action.payload?.decisin;
      state.incom = action.payload?.incom;
      state.decisinj = action.payload?.decisinj;
      state.incomi = action.payload?.incomi;
      state.formdill = action.payload?.formdill;
      state.formdill1 = action.payload?.formdill1;
      state.formdill2 = action.payload?.formdill2;
      state.formdill3 = action.payload?.formdill3;
      state.formdill4 = action.payload?.formdill4;
      state.formdill5 = action.payload?.formdill5;
      state.abroad = action.payload?.abroad;
      state.visit = action.payload?.visit;
      state.request = action.payload?.request;
      state.clientID = action.payload?.clientID;
      state.referals = action.payload?.referals;
    },
    updateProfile: (state, action) => {
      state.firstname = action.payload?.firstname;
      state.lastname = action.payload?.lastname;
      state.mobile = action.payload?.mobile;
      state.email = action.payload?.email;
      state.password = action.payload?.password;
    },
    logout: (state, action) => {
      state.firstname = "";
      state.email = "";
      state.id = "";
      state.lastname = "";
      state.mobile = "";
      state.age = "";
      state.gender = "";
      state.dateOfBirth = "";
      state.numberofsurvey = "";
      state.surveycompleted = "";
      state.amountearned = "";
      state.createdAt = ""
    },
  },
});

export const { setUserDetails, logout, updateProfile } = userSlice.actions;

export default userSlice.reducer;
