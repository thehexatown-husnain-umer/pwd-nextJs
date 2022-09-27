import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: {},
    organization: {},
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.jwt;
      state.user = action.payload.user;
    },
    Organization(state, action) {
      state.organization = action.payload;
    },
    SignOut(state, action) {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, Organization, SignOut } = loginSlice.actions;

export default loginSlice.reducer;
