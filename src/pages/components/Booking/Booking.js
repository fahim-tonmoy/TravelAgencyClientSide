import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { packageId } = useParams();
  const { user } = useAuth();
  const [packag, setPackag] = useState({});
  const { register, handleSubmit, reset, defaultValues } = useForm();

  useEffect(() => {
    fetch(`https://afternoon-cliffs-30771.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackag(data));
  }, [packageId]);

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://afternoon-cliffs-30771.herokuapp.com/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Booked!");
          reset(defaultValues);
        }
        // console.log(res);
      });
  };
  return (
    <BookingStyled>
      <div className="container my-5">
        <h1 className="text-center">BOOKING</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="left">
              <img src={packag.image} alt="" />
              <h3>{packag.packageName}</h3>
              <h4 className="my-3">Location: {packag.location}</h4>
              <h4 className="my-3">Price: {packag.price}</h4>
              <h4 className="my-3">Duraton: {packag.duration}</h4>
              <h4 className="mb-0">Description: </h4>
              <p className="mt-1 py-4">{packag.description}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="right">
              <form
                className="my-4 d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="my-4"
                  placeholder="name"
                  value={user.displayName || ""}
                  {...register("name", { required: true, maxLength: 20 })}
                  style={{ width: "400px", height: "40px" }}
                />
                <br />
                <input
                  className="my-4"
                  placeholder="email"
                  value={user.email || ""}
                  {...register("email", { required: true, maxLength: 20 })}
                  style={{ width: "400px", height: "40px" }}
                />
                <br />
                <input
                  className="my-4"
                  placeholder="No of Member"
                  type="number"
                  {...register("member")}
                  style={{ width: "400px", height: "40px" }}
                />
                <br />
                <input
                  className="my-4"
                  placeholder="Phone Number"
                  type="number"
                  {...register("phone")}
                  style={{ width: "400px", height: "40px" }}
                />
                <br />
                <input
                  className="my-4"
                  placeholder={packag.packageName}
                  value={packag.packageName || ""}
                  {...register("packageName", {
                    required: true,
                    maxLength: 20,
                  })}
                  style={{ width: "400px", height: "40px" }}
                />
                <br />
                <input className="btn btn-primary" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </BookingStyled>
  );
};

const BookingStyled = styled.div`
  img {
    width: 400px;
    height: 250px;
  }
  .right {
    text-decoration: none;
    input {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid gray;
    }
  }
`;

export default Booking;
