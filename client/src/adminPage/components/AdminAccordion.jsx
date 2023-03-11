import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
import "../css/NewProduct.css";
import { axiosInstance } from "../../api calls/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

const ButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const Cta = styled.button`
  background: #373b61;
  border: transparent;
  border-radius: 11px;
  margin-top: 15px;
  padding: 20px 55px;
  color: #ffffff;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled.img`
  width: 100px;
  height: 125px;
  transition: 0.5s ease-in-out;
  &:hover {
    width: 150px;
    height: 175px;
    cursor: pointer;
  }
`;

const ItemP = styled.p`
  text-align: left;
`;

const GridDiv = styled.div`
  padding: 50px 30px 20px 30px;
`;

const SimpleAccordion = () => {
  const [products, setProducts] = useState();

  // const user = useSelector((state) => state.user.currentUser.username);

  const modalStyleProd = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
      hideProgressBar: true,
    });
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(Number);
  const [categories, setCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://zashop-ecommerce.herokuapp.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  const addProductToCollection = (product) => {
    try {
      const res = axiosInstance.post(`/api/products/new`, product);
      notify("product added");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = async (itemId) => {
    try {
      const res = await axiosInstance.delete(`/api/products/${itemId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const isFormValid =
    img !== "" &&
    title !== "" &&
    desc !== "" &&
    price !== "" &&
    categories !== "" &&
    sizes !== "" &&
    color !== "";

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={"#373b61"}>Create A Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="addProductItem">
              <label>Image url</label>
              <input
                type="text"
                value={img}
                required
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                placeholder=" https://www.prada.com/content/dam/pradabkg_products/3/395/39556/12IBF0770/39556_12IB_F0770_S_231_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1000.1000.crop.jpg"
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                value={title}
                name="title"
                type="text"
                required
                placeholder="Apple Airpods"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                value={desc}
                name="desc"
                required
                type="text"
                placeholder="description..."
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                value={price}
                name="price"
                type="number"
                required
                placeholder="100"
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
                placeholder="men's clothing, women's clothing "
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
                placeholder="M,S"
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
                placeholder="red ,green"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
          </Typography>
          {!isFormValid ? (
            <Button variant="contained" disabled>
              Must Fill Form
            </Button>
          ) : (
            <Cta
              type="submit"
              disabled={!isFormValid}
              onClick={(e) => {
                e.preventDefault();
                addProductToCollection({
                  img,
                  title,
                  desc,
                  price,
                  categories,
                  sizes,
                  color,
                });
              }}
            >
              Create a Product
            </Cta>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={"#373b61"}>Delete A Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 5, md: 1 }}
                columns={{ xs: 6, sm: 8, md: 12 }}
              >
                {products &&
                  products.map((item, index) => (
                    <Grid xs={2} sm={4} md={2} key={index}>
                      <GridDiv>
                        <Img src={item.img} alt="" />
                        <ItemP>{item.title}</ItemP>
                      </GridDiv>
                      {/* button for products deletion */}
                      <ButtonsDiv>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() =>
                            HandleDelete(item._id)
                              .then(() => {
                                notify("Product deleted");
                                setTimeout(() => {
                                  window.location.reload();
                                }, 500);
                              })
                              .catch((err) => {
                                console.log(err);
                              })
                          }
                        >
                          delete
                        </Button>

                        <Link to={`/editProduct/${item._id}`}>
                          <Button variant="outlined" color="primary">
                            Edit
                          </Button>
                        </Link>
                      </ButtonsDiv>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Typography>
        </AccordionDetails>
        <ToastContainer
          toastStyle={{
            backgroundColor: "#343434",
            color: "#fff",
            fontSize: "18px",
          }}
        />
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
