import { loginRequest } from "../api calls/api";
import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { toast, ToastContainer } from "react-toastify";

const notify = (notify) => {
  toast(notify, {
    position: "top-center",
  });
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await loginRequest.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    notify("Welcome Back");
  } catch (err) {
    dispatch(loginFailure());
    notify("wrong username/password");
    console.log(err);
  }
  <ToastContainer
    toastStyle={{
      backgroundColor: "#343434",
      color: "#fff",
      fontSize: "18px",
    }}
  />;
};

export const logOutUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    dispatch(logOut());
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
