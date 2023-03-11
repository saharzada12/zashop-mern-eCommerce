import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/products/Products";
import "../../src/App.css";
import Slider from "../Components/Slider";
import WhyUs from "../Components/WhyUs";
import ProductsHeader from "../Components/ProductsHeader";
import BootstrapNav from "../Components/BoostrapNav";
import Testimonials from "../Components/Testimonials";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Homepage = () => {
  return (
    <>
      <Announcement />
      <BootstrapNav />
      <Slider />
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Categories />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInDown">
        <ProductsHeader />
        <Products />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <WhyUs />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__backInUp">
        <Testimonials />
      </AnimationOnScroll>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
