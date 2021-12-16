import BottomFooter from "../../components/Footer/BottomFooter";
import React from "react";
import TopFooter from "../../components/Footer/TopFooter";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <TopFooter />
      </div>
      <BottomFooter />
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  background-color: #8282f0;
  margin-bottom: -15px;
`;

export default Footer;
