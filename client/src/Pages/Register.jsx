import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import BootstrapNav from "../Components/BoostrapNav";
import { mobile } from "../css/Responsive";
import { insertUser } from "../api calls/api";
import MuiButton from "@mui/material/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 9px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 5px 0px rgba(0, 0, 0, 0.75);
  width: 40%;
  padding: 20px;
  background-color: rgba(104, 107, 131, 0.8);
  box-shadow: 15px;
  border-radius: 20px;
  height: 60vh;
  ${mobile({ width: "75%" })}
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 15px 30px 15px;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;

const FooterDiv = styled.div`
  margin-top: 150px;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 0px;
`;

const Already = styled.p`
  text-decoration: none;
  text-align: center;
  color: black;
  &:hover {
    color: black;
  }
`;

const Agreement = styled.p`
  font-size: 12px;
  padding: 20px 0;
  color: #f0e0e0;
  ${mobile({ color: "black" })}
`;

const Register = () => {
  const regEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
    });
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid = username !== "" && password !== "" && email !== "";

  const [message, setMessage] = useState("");
  const [approve, setApprove] = useState(false);

  const emailValidation = () => {
    const regEx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regEx.test(email)) {
      setApprove(true);
      notify("Email Is Valid");
    } else {
      setApprove(false);
      setMessage("email is not valid");
      notify(message);
    }
  };

  const navigate = useNavigate();
  const movePage = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  return (
    <>
      <Announcement />
      <BootstrapNav />
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form>
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form>
          <Buttons>
            <>
              {!isFormValid ? (
                <div>
                  <MuiButton
                    disabled
                    variant="contained"
                    sx={{ margin: "0px 0px 15px 0px" }}
                  >
                    must fill form
                  </MuiButton>
                </div>
              ) : (
                <div>
                  {approve ? (
                    <MuiButton
                      sx={{ width: "200px", margin: "0px 0px 15px 0px" }}
                      variant="contained"
                      color="primary"
                      disabled={!isFormValid}
                      onClick={(e) => {
                        e.preventDefault();
                        insertUser({ username, email, password })
                          .then(() => {
                            notify("User Create");
                            movePage();
                          })
                          .catch((err) => {
                            const error = err.response.data.msg.code;

                            if (error === 11000) {
                              notify("email Is Already Taken");
                              setEmail("");
                            }
                          });
                      }}
                    >
                      Click Here To Register
                    </MuiButton>
                  ) : (
                    <MuiButton
                      sx={{ width: "200px" }}
                      variant="contained"
                      onClick={emailValidation}
                    >
                      check email
                    </MuiButton>
                  )}
                </div>
              )}
              <Link to="/Login" className="Reg-Link">
                <Already>Already Have An Account ? Click Here</Already>
              </Link>
              <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
            </>
          </Buttons>
        </Wrapper>
      </Container>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343434",
          color: "#fff",
          fontSize: "18px",
        }}
      />
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </>
  );
};

export default Register;
