import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BootstrapNav from "../../Components/BoostrapNav";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import axios from "axios";
import { axiosInstance } from "../../api calls/api";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";

const FooterDiv = styled.div`
  margin-top: 800px;
`;

const EditDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  color: #373b61;
`;

const EditProduct = () => {
  const id = useParams();
  const productId = id.id;
  //   console.log(productId);

  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
    });
  };

  const [product, setProduct] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [categories, setCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://zashop-ecommerce.herokuapp.com/api/products/find/${productId}`
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const updateProduct = (title, desc, price, categories, sizes, color, img) => {
    const body = {
      title: title,
      desc: desc,
      price: price,
      categories: categories,
      color: color,
      size: sizes,
      img: img,
    };
    axiosInstance
      .put(`/api/products/${productId}`, body)
      .then((res) => {
        console.log("product updated successfully");
        notify("Product Updated");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <BootstrapNav />
      <EditDiv>
        <ProductTitle>Edit "{product && product.title}"</ProductTitle>

        <div className="addProductItem">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder={product && product.title}
          />
        </div>
        <div className="addProductItem">
          <label>Image url</label>
          <input
            type="text"
            value={img}
            required
            onChange={(e) => {
              setImg(e.target.value);
            }}
            placeholder="img address"
          />
        </div>
        <div className="addProductItem">
          <label>Description : </label>
          <input
            value={desc}
            name="desc"
            type="text"
            required
            placeholder={product && product.desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Price:</label>
          <input
            value={price}
            name="price"
            type="number"
            required
            placeholder={product && product.price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            value={categories}
            type="text"
            required
            placeholder={product && product.categories}
            onChange={(e) => {
              setCat(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Sizes</label>
          <input
            value={sizes}
            type="text"
            placeholder={product && product.size}
            required
            onChange={(e) => {
              setSizes(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input
            type="text"
            value={color}
            required
            placeholder={product && product.color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            updateProduct(title, desc, price, categories, sizes, color, img);
          }}
        >
          Update Product
        </Button>
      </EditDiv>
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

export default EditProduct;
