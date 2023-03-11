import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import BootstrapNav from "../Components/BoostrapNav";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest, axiosInstance } from "../api calls/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { mobile } from "../css/Responsive";

const key = process.env.REACT_APP_STRIPE;

const FooterArea = styled.div`
  margin-top: 100px;
  width: 100vw;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px", display: "flex", flexDirection: "column" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ justifyContent: "space-evenly" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  ${mobile({ display: "none" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    border: "1px solid black",
    borderRadius: "25px",
    margin: "10px",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const EmptyCart = styled.h1`
  text-align: center;
  color: rgb(128, 123, 123);
`;

const Cart = () => {
  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
    });
  };

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser.username);
  const [userCart, setUserCart] = useState("");

  useEffect(() => {
    const getSingleCart = async () => {
      try {
        const response = await axios.get(
          `https://mern-ecommerce-zashop.herokuapp.com/api/v1/users/${user}`
        );
        setUserCart(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleCart();
  }, [user]);

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken,
          amount: { totalAmount } * 100,
        });
        navigate("/", { data: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  const myCart = userCart.cart;

  const calculateTotalAmount = (cart) => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce(
      (acc, item) => acc + item.productPrice * item.quantity,
      0
    );
  };

  const totalAmount = calculateTotalAmount(myCart);

  const jwtUser = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const jwtCurrentUser = user && JSON.parse(jwtUser).currentUser;
  const jwtCode = jwtCurrentUser.accessToken;

  const deleteUserCart = async () => {
    try {
      const res = await axiosInstance.delete(`/api/v1/delete/${user}`);
      notify("Cart has been deleted");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      window.location.reload();
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <Announcement />
      <BootstrapNav />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={"/"}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          {myCart && myCart.length >= 1 ? (
            <TopButton type="filled" onClick={deleteUserCart}>
              DELETE CART
            </TopButton>
          ) : (
            <Link to={"/"}>
              <TopButton type="filled">Cart Is Empty</TopButton>
            </Link>
          )}
        </Top>
        <Bottom>
          <Info>
            {myCart && myCart.length >= 1 ? (
              myCart.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.productImg} />
                    <Details>
                      <ProductName>
                        <b>Product: {product.productTitle}</b>
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product.productId}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>total: {product.quantity}</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>
                      ${product.quantity * product.productPrice}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            ) : (
              <EmptyCart>your cart is empty</EmptyCart>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ZaShop."
              image="https://ci5.googleusercontent.com/proxy/1N_YYYbyA6mVD_Gxc-O1DKICvf5k08B39y9UpsTDOQxglxZqJ3uYDAM_VhFA2sh0s9pSH6SweExdFnrC-ja9DRK4p69DYZMOREuqng6a_yCizZKWGoCMSuGs8BfdLCGt32cg0NrAQZfSxBzHu9Td2OfFUQ=s0-d-e1-ft#https://cdn.freelogodesign.org/files/dab0eef7efad4a509948d4620dfe3eb4/thumb/logo_200x200.png?v=0"
              billingAddress
              shippingAddress
              description={`your total is ${totalAmount} $$`}
              amount={totalAmount * 100}
              token={onToken}
              stripeKey="pk_test_51Lc9cWLgDYUwIYWOVhcdE2Wnls6POz2CdBTGXdT7q3HWurY8Da2A0YsUryOd6pozKExpQoNWvd4gpLCJGYW49CUT00pSrIWeHg"
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343434",
          color: "#fff",
          fontSize: "18px",
        }}
      />
      <FooterArea>
        <Footer />
      </FooterArea>
    </>
  );
};

export default Cart;
