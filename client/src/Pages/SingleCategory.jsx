import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../css/SingleCategory.css";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Products from "../Components/products/Products";
import BootstrapNav from "../Components/BoostrapNav";

// THE ONE CATEGORY AFTER YOU PICK A CATEGORY

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const SingleCategory = () => {
  const categoryPage = useParams();
  const catName = categoryPage.category;

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Announcement />
      <BootstrapNav />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <div className="sc-header">
        <h1 className="sc-title">{catName}</h1>
        <h2>our best picks for {catName}</h2>
      </div>
      <Products cat={catName} filters={filters} sort={sort} />

      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleCategory;
