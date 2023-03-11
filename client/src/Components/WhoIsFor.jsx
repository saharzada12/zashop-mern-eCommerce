import React from "react";
import styled from "styled-components";
import { mobile } from "../css/Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  background-color: #686b83;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const Header = styled.h1`
  color: #ffff;
  text-align: center;
  padding-bottom: 15px;
  font-size: 56px;
  font-weight: 700;
`;
const SubHeader = styled.p`
  color: #24262b;
  text-align: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.25rem;
  ${mobile({ fontSize: "1rem" })}
`;

const Svg = styled.div`
  display: block;
`;

const WhoIsFor = () => {
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#686b83"
            fill-opacity="1"
            d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container>
        <Header>Who is ZaShop for?</Header>
        <SubHeader>
          Whether you’re a small fashion love,<br></br> designer, a big fashion
          enthusiast, <br></br> or in need to make an Impact on the fashion
          world,
          <br></br>we are here for you.
        </SubHeader>
        <Svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 310">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Svg>
      </Container>
    </>
  );
};

export default WhoIsFor;
