import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "https://mern-ecommerce-zashop.herokuapp.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate()]);
  return (
    <div>
      {stripeToken ? (
        <span>processing... please wait {navigate("/success")}</span>
      ) : (
        <StripeCheckout
          name="ZaShop."
          image="https://ci5.googleusercontent.com/proxy/1N_YYYbyA6mVD_Gxc-O1DKICvf5k08B39y9UpsTDOQxglxZqJ3uYDAM_VhFA2sh0s9pSH6SweExdFnrC-ja9DRK4p69DYZMOREuqng6a_yCizZKWGoCMSuGs8BfdLCGt32cg0NrAQZfSxBzHu9Td2OfFUQ=s0-d-e1-ft#https://cdn.freelogodesign.org/files/dab0eef7efad4a509948d4620dfe3eb4/thumb/logo_200x200.png?v=0"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey="pk_test_51Lc9cWLgDYUwIYWOVhcdE2Wnls6POz2CdBTGXdT7q3HWurY8Da2A0YsUryOd6pozKExpQoNWvd4gpLCJGYW49CUT00pSrIWeHg"
        ></StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
