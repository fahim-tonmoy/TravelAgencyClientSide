import { Card } from "react-bootstrap";
import React from "react";
import background from "../../../Image/about-bg.png";
import styled from "styled-components";

const WhyUs = () => {
  return (
    <WhyUsStyled>
      <div className="container">
        <h1 className="text-center">Why Choose Us</h1>
        <hr className="mx-auto" />
        <p className="text-center">
          Welcome to Travel Agency. We have organized tons of tours for last
          five years. We offer suitable and affordable tour plans also Premium
          and Custome tour plans.
        </p>
        <div className="cards">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card className="card p-3">
                <i className="fas fa-street-view fa-3x mx-auto"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Perfect and Safe travel Plan
                  </Card.Title>
                  <Card.Text className="text-center my-3">
                    We have a dedicated team to do some research for every tour
                    and plan accordingly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card className="card p-3">
                <i className="fas fa-user fa-3x mx-auto"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Experienced Guides
                  </Card.Title>
                  <Card.Text className="text-center my-3">
                    We have Experienced Guides from Every location so You can
                    have chill and leave the rest on us.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card className="card p-3">
                <i className="fas fa-money-check-alt fa-3x mx-auto"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Custom Tour Plans{" "}
                  </Card.Title>
                  <Card.Text className="my-3 text-center">
                    We have Experienced Guides from Every location so You can
                    have chill and leave the rest on us.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </WhyUsStyled>
  );
};

const WhyUsStyled = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: fit;
  background-repeat: no-repeat;
  .container {
    min-height: 40vh;
    h1 {
      font-size: 40px;
      font-weight: 700;
    }
    hr {
      width: 100px;
      color: #423737;
      border: 2px solid gray;
      border-radius: 20px;
      margin-top: -2px;
    }
    .cards {
      .card {
        width: 100%;
        height: 200px;
        margin: 20px 30px 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        background: linear-gradient(
          95deg,
          rgba(111, 194, 241, 0.8),
          rgba(22, 116, 145, 0.5)
        );
        i {
          margin-top: 20px;
        }
      }
    }
  }
`;

export default WhyUs;
