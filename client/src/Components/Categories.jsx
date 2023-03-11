import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/data";
import "../css/Categories.css";

// DIFFERENT CATEGORIES THAT LEAD TO SPECIFIC PAGE LEADS TO - <SingleCategory page>
const Categories = () => {
  const renderCategories = categories.map((item) => {
    return (
      <div className="cat-Container" item={item} key={item.id}>
        <div className="cat-img">
          <img src={item.img} alt="" />
        </div>
        <div className="cat-info">
          <div className="cat-title">{item.title}</div>
          <Link to={`/products/${item.category}`}>
            <div>
              <button className="cat-btn">SHOP NOW!</button>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="cat-flex">{renderCategories}</div>
    </>
  );
};

export default Categories;
