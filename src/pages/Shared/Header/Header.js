import React from "react";
import SecondTopHeader from "../../components/Header/SecondTopHeader";
import TopHeader from "../../components/Header/TopHeader";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="top">
        <TopHeader />
      </div>
      <div className="bottom my-3">
        <SecondTopHeader />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  background-color: #2b2b8fb7;
  width: 100%;
  height: 90px;
`;

export default Header;
