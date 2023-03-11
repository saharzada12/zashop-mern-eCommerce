import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logOutUser } from "../state/apiCalls";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../api calls/api";

const Button = styled.button`
  border: transparent;
`;

function BootstrapNav() {
  const userLogged = useSelector((state) => state.user.currentUser);
  const userId = userLogged && userLogged._id;
  const [userInfo, setUserInfo] = useState("");
  const isAdmin = userInfo.isAdmin == true;

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/users/${userId}`);
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleUser();
  }, []);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    logOutUser(dispatch, null);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">ZaShop.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutUs">About Us</Nav.Link>

            <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              className="category-dropdown"
            >
              <NavDropdown.Item href="/products/men's clothing">
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/women's clothing">
                Women
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/jackets and jeans">
                Jackets and Jeans
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavDropdown
            title={userLogged ? `${userLogged.username}` : "user"}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/register">
              {userLogged ? "" : "Sign Up"}
            </NavDropdown.Item>
            <NavDropdown.Item href="/login">
              {userLogged ? "" : "Log In"}
            </NavDropdown.Item>
            <NavDropdown.Item href={`/Cart`}>
              {userLogged ? `Cart (${userInfo && userInfo.cart.length})` : ""}
            </NavDropdown.Item>
            <NavDropdown.Item href={`/admin`}>
              {isAdmin ? "Dashboard" : ""}
            </NavDropdown.Item>

            {userLogged ? (
              <>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button onClick={handleLogOut}> Log Out</Button>
                </NavDropdown.Item>
              </>
            ) : (
              ""
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNav;
