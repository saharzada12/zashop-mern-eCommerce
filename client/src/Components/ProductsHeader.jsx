import React from "react";
import styled from "styled-components";
import { mobile } from "../css/Responsive";

const Container = styled.div`
  color: black;
  margin-top: 150px;
  text-transform: capitalize;
  text-align: center;
  ${mobile({ marginTop: "200px" })}
`;
const Text = styled.h1`
  font-weight: 500;
  color: #373b61;
`;

const SubText = styled.h4`
  font-weight: 300;
`;
const ProductsHeader = () => {
  return (
    <Container>
      <Text>our best selling products</Text>
      <SubText>here you can enjoy our finest clothing brands</SubText>
    </Container>
  );
};

export default ProductsHeader;
