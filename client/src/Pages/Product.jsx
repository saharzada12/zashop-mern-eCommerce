import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../css/Responsive";
import BootstrapNav from "../Components/BoostrapNav";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ display: "flex", flexDirection: "column", rowGap: "20px" })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin: 5px 5px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  width: 70%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const FilterSizeOption = styled.option``;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ClickButton = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: #474444;
    color: white;
  }
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  padding-bottom: 15px;
  align-items: center;
  font-weight: 700;
`;
const DisabledButton = styled.button`
  cursor: not-allowed;
  border: 2px solid black;
  padding: 15px;
`;

// SINGLE PRODUCT PAGE !!!
const Product = () => {
  const id = useParams();
  const productId = id.id;

  const user = useSelector((state) => state.user.currentUser);

  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
      hideProgressBar: true,
    });
  };

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `https://zashop-ecommerce.herokuapp.com/api/products/find/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCartUser = async () => {
    try {
      const res = await axios.post(
        `https://mern-ecommerce-zashop.herokuapp.com/api/v1/new/${user.username}`,
        {
          productId: productId,
          productTitle: product.title,
          productImg: product.img,
          productCat: [product.cat],
          productDesc: product.desc,
          productPrice: product.price,
          quantity: quantity,
        }
      );
      notify("item added successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Announcement />
      <BootstrapNav />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
          </AddContainer>
          {user ? (
            <ClickButton onClick={addToCartUser}>ADD TO CART</ClickButton>
          ) : (
            <DisabledButton disabled>must Log In to Add to Cart</DisabledButton>
          )}
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343434",
          color: "#fff",
          fontSize: "18px",
          hideProgressBar: true,
        }}
      />
      <Footer />
    </>
  );
};

export default Product;
