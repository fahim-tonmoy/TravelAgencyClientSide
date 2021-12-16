import { Carousel } from "react-bootstrap";
import React from "react";
import bannerFour from "../../../../Image/Banner/banner4.jpg";
import bannerOne from "../../../../Image/Banner/banner1.jpg";
import bannerThree from "../../../../Image/Banner/banner3.jpg";
import bannerTwo from "../../../../Image/Banner/banner2.jpg";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerStyled>
      <Carousel className="banner" fade indicator="false">
        <Carousel.Item className="banner-item">
          <img
            className="d-block w-100 img-fluid"
            src={bannerOne}
            alt="First slide"
          />
          <Carousel.Caption className="text">
            <h3>We are Travel Agency</h3>
            <p>We Provide Different Packages for different places .</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={bannerTwo} alt="Second slide" />

          <Carousel.Caption className="text">
            <h3>Don't know Where to go for vacation!!</h3>
            <p>Jump into our package section find a suitable one.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={bannerThree} alt="Third slide" />
          <Carousel.Caption className="text">
            <h3>We have scheduled Tours all over the Year.</h3>
            <p>
              We offer different Scheduled tours as well as Premium packages.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={bannerFour} alt="Fourth slide" />
          <Carousel.Caption className="text">
            <h3>We have a 24/7 Communication Service</h3>
            <p>
              Reach us at any time and we'll be there to find a perfect plan for
              you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  margin-top: -18px;
  z-index: 2;
  .banner {
    .banner-item {
      height: 95vh;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        padding: 18px 0;
      }
      .text {
        position: absolute;
        color: white;
        top: 40%;
        h3 {
          margin-top: 20px;
          font-size: 40px;
          font-weight: 900;
          text-shadow: -1px -1px 15px #333, 1px -1px 15px #333,
            -1px 1px 15px #333, 1px 1px 15px #333;
        }
        p {
          font-size: 25px;
          font-weight: 600;
          text-shadow: -1px -1px 15px #333, 1px -1px 15px #333,
            -1px 1px 15px #333, 1px 1px 15px #333;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .banner-item {
      .text {
        position: absolute;
        color: white;
        /* top: 40%; */
        h3 {
          margin-top: 20px;
          font-size: 25px;
          font-weight: 900;
        }
        p {
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Banner;
