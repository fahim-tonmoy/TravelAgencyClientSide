import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Package = () => {
  const { packageId } = useParams();
  const [packag, setPackag] = useState({});

  useEffect(() => {
    fetch(`https://afternoon-cliffs-30771.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackag(data));
  }, [packageId]);
  return (
    <PackageStyled>
      <div className="top">
        <div className="container">
          <h1 className="fw-bold display-3">Package : {packag.packageName}</h1>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <h3 className="text-center mt-3">Package : {packag.packageName}</h3>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="left">
                <img className="img-fluid" src={packag.image} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="right">
                <h4 className="my-3">Location: {packag.location}</h4>
                <h4 className="my-3">Price: {packag.price}</h4>
                <h4 className="my-3">Duraton: {packag.duration}</h4>
                <h4 className="mb-0">Description: </h4>
                <p className="mt-1 py-4">{packag.description}</p>
                <Link to={`/booking/${packag._id}`}>
                  <button className="btn btn-warning">Book Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PackageStyled>
  );
};

const PackageStyled = styled.div`
  .top {
    background: url(https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/90466092_2908541895880464_5656554370729246720_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeHJyKaU7A7koHX24PoBqvSR5U7afLKEsKjlTtp8soSwqA-Xodctw7L4_kNNxnWVr3Spz7H_D51Ys5OQABHeRfF1&_nc_ohc=e1ZZcv7WdcQAX9qHqys&tn=36ukg9R41PHgM_lf&_nc_ht=scontent.fdac8-1.fna&oh=00_AT8sYIYO2Dgg7_-Hv4gWP5tMYFttXT5JMi0mn0EVk0bLvg&oe=61E03456);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -400px;
    width: 100%;
    min-height: 40vh;
    position: relative;
    .container {
      h1 {
        position: absolute;
        top: 50%;
        left: 30%;
        color: white;
      }
    }
  }
  .bottom {
    .right {
      p {
        text-align: justify;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .top {
      min-height: 30vh;
      h1 {
        position: absolute;
        top: 100%;
        left: 10%;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .top {
      min-height: 20vh;
      position: relative;
      h1 {
        position: absolute;
        top: 30% !important;
        left: 20% !important;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    .top {
      position: relative;
      h1 {
        position: absolute;
        top: 30% !important;
        left: 20% !important;
      }
    }
  }
`;

export default Package;
