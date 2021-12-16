import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutStyled>
      <div className="about">
        <div className="container">
          <h1 className="text-center fw-bolder display-3 py-5">About Us</h1>
          <hr className="mx-auto" />
        </div>
      </div>
      <div className="container">
        <div className="about-details my-4">
          <h4 className="fw-bolder">ABOUT TRAVEL AGENCY</h4>
          <p>
            We are a group of passionate and adventurous tourism professionals.
            We have assembled the best in the business who can teach you all
            there is to know about Bangladesh, and we are proud to have formed a
            team of Tour managers who are knowledgeable, dedicated and open
            minded, energetic yet easy going. We speak English, Bangla with
            outstanding professionalism – and the support team is amazing.
          </p>
        </div>
        <div className="do-details my-5">
          <h4 className="fw-bolder">What we do!!</h4>
          <p>
            Tours & Trips organizes excursions for tourist groups from all
            around the world. Visitors have come to us from Italy, Germany,
            France, Sweden, Spain, India, Japan, China, Netherlands, UK, USA,
            and so on. Our expertise includes taking care of individual tourists
            and small groups with tailor-made adventure tours including Mangrove
            Forest, Hills and visits around the country. There is an expert team
            to take care of our inbound and outbound tours. We have a
            specialized team to assist makers of film documentaries, and we
            provide logistics support, saving them much effort, by taking care
            and helping journalists plan their appointments, and assisting
            researchers from abroad. <br />
            Travel Agency is a local tour operator in Bangladesh with vision to
            provide the best possible tourism solutions in a smooth way for our
            valued guests while having a Vacation in Bangladesh. We are
            committed to provide our guests the Bangladesh tour Packages and
            also to offer our Bangladesh Budget tour Packages and to give you
            best Bangladesh holiday packages. Our holiday packages in Bangladesh
            are design to give you real Bangladesh. Holiday tour in Bangladesh
            will bring you close to people and you while you travel in
            Bangladesh you will always want to come back again. We offer the
            cheap tour package in Bangladesh that will fit in your budget. Our
            tours are guided tour in Bangladesh to make thing smooth also you
            can hire transportations only. We do Rocket Steamer and Back water
            tour to Barisal Floating Market. We offer unforgettable tour to
            Mangrove Sunderban .
          </p>
        </div>
        <div className="focus my-5">
          <h4 className="fw-bolder">OUR FOCUS</h4>
          <ul>
            <li>
              {" "}
              To be the world’s pre-eminent high-end bespoke travel specialist.{" "}
            </li>
            <li>
              {" "}
              To give back to the people and the communities that we visit.{" "}
            </li>
            <li>
              {" "}
              To provide for our clients the highest level of personalized
              service and attention to detail.{" "}
            </li>
            <li>
              {" "}
              To design unique itineraries personalized to our clients’ own
              needs and passions.{" "}
            </li>
            <li>
              {" "}
              To maintain the highest level of professionalism, integrity,
              honesty and fairness with our staff, clients and suppliers.{" "}
            </li>
            <li>
              {" "}
              To build long-term relationships with our clients so they keep
              coming back to us.{" "}
            </li>
            <li>
              {" "}
              To make the world a better place in our own little way, bringing
              together people from different cultures all over the world by
              enhancing communication and global understanding.
            </li>
          </ul>
        </div>
      </div>
    </AboutStyled>
  );
};

const AboutStyled = styled.div`
  margin-top: -10px;
  .about {
    background: url(https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/90466092_2908541895880464_5656554370729246720_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeHJyKaU7A7koHX24PoBqvSR5U7afLKEsKjlTtp8soSwqA-Xodctw7L4_kNNxnWVr3Spz7H_D51Ys5OQABHeRfF1&_nc_ohc=e1ZZcv7WdcQAX9qHqys&tn=36ukg9R41PHgM_lf&_nc_ht=scontent.fdac8-1.fna&oh=00_AT8sYIYO2Dgg7_-Hv4gWP5tMYFttXT5JMi0mn0EVk0bLvg&oe=61E03456);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -400px;
    width: 100%;
    min-height: 40vh;
    hr {
      width: 100px;
      border: 2px solid black;
      background-color: black;
      margin-top: -40px;
    }
  }
`;

export default About;
