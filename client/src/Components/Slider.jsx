import React, { useState } from "react";
import "../css/Slider.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { sliderItems } from "../data/data.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const TitleHead = styled.h1`
  color: #373b61;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <div
        className="arrow-left"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowBackIcon
          sx={{
            color: "black",
          }}
        />
      </div>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <div className="slide" key={item.id} bg={item.bg}>
            <div className="imgContainer">
              <img src={item.img} alt="the images" />
            </div>
            <div className="infoContainer">
              <div className="infoTitle">
                <TitleHead>{item.title}</TitleHead>
              </div>
              <div className="infoDesc">{item.desc}</div>
              <Link to={`/products/${item.category}`}>
                <div>
                  <button className="slider-button">SHOW NOW</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Wrapper>
      <div
        className="arrow-right"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIcon
          sx={{
            color: "black",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
