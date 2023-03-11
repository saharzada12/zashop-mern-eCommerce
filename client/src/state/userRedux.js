import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state, action) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginFailure, loginSuccess, loginStart, logOut } =
  userSlice.actions;

export default userSlice.reducer;
