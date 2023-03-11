import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Announcement from "../Components/Announcement";
import BootstrapNav from "../Components/BoostrapNav";
import Footer from "../Components/Footer";
import { login } from "../state/apiCalls";
import "../css/Login.css";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Alink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
  }
`;

const LoginPage = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
      hideProgressBar: true,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Announcement />
      <BootstrapNav />
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              required={true}
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label>UserName</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              value={password}
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <div className="Log-btns">
            <button className="Log-btn" onClick={handleLogin}>
              Login
            </button>

            <Alink href="/register">Don't have an account? sign up here</Alink>
          </div>
        </form>
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343434",
          color: "#fff",
          fontSize: "18px",

          hideProgressBar: true,
        }}
      />
      <div className="footer-box-login">
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
