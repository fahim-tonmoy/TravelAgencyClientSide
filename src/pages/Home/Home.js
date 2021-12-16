import Banner from "../components/Home/Banner/Banner";
import Gallery from "../components/Home/Gallery/Gallery";
import Packages from "../components/Home/Packages";
import React from "react";
import WhyUs from "../components/Home/WhyUs";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyled>
      <Banner />
      <WhyUs />
      <Packages />
      <Gallery />
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
