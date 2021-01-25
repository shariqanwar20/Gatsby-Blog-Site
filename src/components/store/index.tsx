import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import Swal, { SweetAlertIcon } from "sweetalert2";

const signInSlice = createSlice({
  name: "Sign In",
  initialState: { user: "" },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      Swal.fire({
        titleText: "You are logged In",
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Dismiss",
        icon: "success",
        showClass: {
          popup: "swal2-noanimation",
          backdrop: "swal2-noanimation",
        },
        hideClass: {
          popup: "",
          backdrop: "",
        },
      });
    },
    userLogout: (state, action) => {
      console.log("User Logged Out");

      state.user = "";
      Swal.fire({
        titleText: "You are logged Out",
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Dismiss",
        icon: "success",
        showClass: {
          popup: "swal2-noanimation",
          backdrop: "swal2-noanimation",
        },
        hideClass: {
          popup: "",
          backdrop: "",
        },
      });
    },
  },
});

export const { userLogin, userLogout } = signInSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, signInSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const userData = (state) => state.user;
export default store;
