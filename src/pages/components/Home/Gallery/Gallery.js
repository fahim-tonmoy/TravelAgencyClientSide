import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Gallery = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-cliffs-30771.herokuapp.com/gallery")
      .then((res) => res.json())
      .then((data) => setImgs(data));
  }, []);
  return (
    <GalleryStyled>
      <div className="container my-5">
        <h2 className="fw-bold display-4 text-center">Gallery</h2>
        <hr className="mx-auto" />
        <div className="row">
          {imgs.map((img) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <img className="img-fluid" src={img.photoUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </GalleryStyled>
  );
};

const GalleryStyled = styled.div`
  .container {
    hr {
      width: 100px;
      color: #423737;
      border: 2px solid gray;
      border-radius: 20px;
      margin-top: -2px;
    }
    img {
      margin: 15px 0;
      padding: 10px;
      width: 100%;
      height: 300px;
      /* box-shadow: 10px 2px 2px rgba(114, 112, 112, 0.5); */
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    img:hover {
      transform: scale(1.25, 1.15);
      transition: ease 0.8s;
      box-shadow: 10px 5px 5px rgba(114, 112, 112, 0.5);
    }
  }
`;

export default Gallery;
