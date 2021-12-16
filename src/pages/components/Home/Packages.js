import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import usePackage from "../../../hooks/usePackage";

const Packages = () => {
  const [packages] = usePackage();
  return (
    <PackagesStyled>
      <div className="container">
        <h1 className="text-center fw-bold display-2"> package</h1>
        <hr className="mx-auto" />
        <div className="row">
          {packages.map((packag) => (
            <div key={packag._id} className="col-sm-12 col-md-6 col-lg-4">
              <Card className="card p-3">
                <img
                  src={packag.image}
                  alt=""
                  className="card-img-top img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {packag.packageName}
                  </Card.Title>
                  <div className="text-center my-3">
                    <p className="my-4">{packag.duration}</p>
                    <Link to={`/packages/${packag._id}`}>
                      <button className="btn btn-info">Details</button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PackagesStyled>
  );
};

const PackagesStyled = styled.div`
  hr {
    width: 100px;
    color: #423737;
    border: 2px solid gray;
    border-radius: 20px;
    margin-top: -2px;
  }
  .card {
    width: 100%;
    height: 400px;
    margin: 20px 0;
    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export default Packages;
