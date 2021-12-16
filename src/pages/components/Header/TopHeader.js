import React from "react";
import styled from "styled-components";

const TopHeader = () => {
  return (
    <TopHeaderStyled>
      <div className="container header-top mb-3">
        <div className="left">
          <p>fht801@gmail.com</p>
          <p>+880160001110111</p>
        </div>
        <div className="right">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </TopHeaderStyled>
  );
};

const TopHeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 20px;
        font-weight: 600;
        margin-left: 20px;
        margin-top: 10px;
      }
    }
    .right {
      i {
        margin-left: 10px;
      }
      i:hover {
        color: #3434ca88;
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .header-top {
      .left {
        p {
          font-size: 15px;
          font-weight: 600;
        }
      }
      .right {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .left {
      p {
        font-size: 15px;
        font-weight: 600;
      }
    }
    .right {
      display: none;
    }
  }
`;

export default TopHeader;
