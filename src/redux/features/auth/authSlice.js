import { createSlice } from "@reduxjs/toolkit";

// Get token from localStorage on initial load
const token = localStorage.getItem("token");
const user = token ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  user: user,
  token: token,
  isAuthenticated: !!token, // If token exists, user is authenticated
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      // Store token and user data in localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // Remove token and user data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
