import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Header = styled.h1`
  color: #373b61;
  padding-left: 15px;
`;

const AdminHeader = () => {
  const userLogged = useSelector((state) => state.user);

  return (
    <>
      <Header>Hello Admin {userLogged.currentUser.username}</Header>
    </>
  );
};

export default AdminHeader;
