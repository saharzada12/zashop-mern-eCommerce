import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "react-scroll-to-top";
import { mobile } from "../css/Responsive";
const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ textAlign: "center" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #686b83;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #6d6868;
  color: white;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Newsletter = () => {
  const notify = (msg) => {
    toast(msg);
  };
  const [email, setEmail] = useState("");
  return (
    <>
      <div id="NewsLetter">
        <Container>
          <Title>Newsletter</Title>
          <Desc>Get timely updates for your favorite products.</Desc>
          <InputContainer>
            <Input
              placeholder="Your email"
              type={email}
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Button
              onClick={() => {
                if (email === "") {
                  notify("please enter email address");
                } else {
                  notify("thank you for subscribing");
                  setEmail("");
                }
              }}
            >
              SIGN UP
            </Button>
          </InputContainer>
        </Container>
        <div>
          <ScrollToTop smooth color="black" />
        </div>
      </div>

      <ToastContainer position="top-center" draggable theme="dark" />
    </>
  );
};

export default Newsletter;
