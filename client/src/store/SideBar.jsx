import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  sidemenu: false,
};

const sideSlice = createSlice({
  name: "sidemenu",
  initialState: initialValue,
  reducers: {
    setSideMennu: (state, action) => {
      state.sidemenu = action.payload?.sidemenu;
    },
  },
});

export const {setSideMennu} = sideSlice.actions;

export default sideSlice.reducer;
