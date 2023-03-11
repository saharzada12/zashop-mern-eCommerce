import React from "react";
import "../css/Announcement.css";
import styled from "styled-components";
import { mobile } from "../css/Responsive.js";

const Container = styled.div`
  background-color: #686b83;
  color: #f0eded;
  display: flex;
  text-align: center;
  height: 30px;
  justify-content: center;
  padding: 5px 0;
`;

const Text = styled.p`
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  return (
    <Container>
      <Text>SUPER DEAL ! FREE SHIPPING ON ORDERS IN JANUARY-MARCH</Text>
    </Container>
  );
};

export default Announcement;
