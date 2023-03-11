import React from "react";
import Announcement from "../Components/Announcement";
import BootstrapNav from "../Components/BoostrapNav";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../css/Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 40vh;
  background-color: rgba(104, 107, 131, 0.8);
  top: 30%;
  left: 25%;
  border-radius: 25px;
  ${mobile({ width: "60%" })}
`;

const FooterDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 90%;
`;

const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 25px;
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: #f0eded;
  background-color: #3a3838;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  justify-content: center;
  text-align: center;
  border: 4px solid transparent;
  width: 200px;
  ${mobile({ width: "100px", fontSize: "14px" })}
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 25px 10px;
`;

// const Img = styled.img`
//   width: 150px;
// `;

const TextHeader = styled.h1`
  color: #f0eded;
  font-weight: 500;
  ${mobile({ fontSize: "22px" })}
`;
const SubHeader = styled.h3`
  color: #f0eded;
  ${mobile({ fontSize: "18px" })}
`;
const UsefulLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MustBeLogged = () => {
  return (
    <>
      <Announcement />
      <BootstrapNav />
      <div id="notLogged">
        <Container>
          <Wrapper>
            <TextArea>
              {/* <Img src={logo} alt="website Logo" /> */}
              <TextHeader>ZaShop.</TextHeader>
              <SubHeader>You must be logged in to continue</SubHeader>
            </TextArea>
            <UsefulLinks>
              <SubHeader>Here Are Some Useful Links</SubHeader>
              <ButtonsArea>
                <Link to={"/login"}>
                  <Button className="jello-vertical">Log In</Button>
                </Link>
                <Link to={"/register"}>
                  <Button className="jello-vertical">Sign Up</Button>
                </Link>
              </ButtonsArea>
            </UsefulLinks>
          </Wrapper>
        </Container>
        <FooterDiv>
          <Footer />
        </FooterDiv>
      </div>
    </>
  );
};

export default MustBeLogged;
