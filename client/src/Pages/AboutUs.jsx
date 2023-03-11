import React from "react";
import Announcement from "../Components/Announcement";
import BootstrapNav from "../Components/BoostrapNav";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import Timeline from "../Components/Timeline";
import WhoIsFor from "../Components/WhoIsFor";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const AboutUs = () => {
  return (
    <>
      <Announcement />
      <BootstrapNav />
      <WhoIsFor />
      <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
        <Card />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Timeline />
      </AnimationOnScroll>
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUs;
