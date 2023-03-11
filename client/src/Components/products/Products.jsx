import { useEffect, useState } from "react";
import styled from "styled-components";
import MiniProduct from "./MiniProduct";
import axios from "axios";
// ALL THE PRODUCTS IN THE STORE /HOME-PAGE /EACH-CATEGORY
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `https://zashop-ecommerce.herokuapp.com/api/products?category=${cat}`
            : `https://zashop-ecommerce.herokuapp.com/api/products`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - b.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <MiniProduct item={item} key={item.id} />
          ))
        : products
            .slice(0, 4)
            .map((item) => <MiniProduct item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
