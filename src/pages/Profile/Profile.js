import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import usePackage from "../../hooks/usePackage";

const Profile = () => {
  const [packages, setPackages] = usePackage();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-cliffs-30771.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        // console.log(data);
      });
  }, []);

  // DELETE USER
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you Sure you want to delete?");
    if (proceed) {
      const URL = `https://afternoon-cliffs-30771.herokuapp.com/orders/${id}`;
      fetch(URL, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully!");
            const remainingUsers = orders.filter((order) => order._id !== id);
            setOrders(remainingUsers);
          }
          console.log(data);
        });
    }
  };

  return (
    <ProfileStyled>
      <div className="container my-5">
        <div className="user">
          <h1 className="me-4">Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt="" />
        </div>
        <div>
          <h1 className="my-5">Your Order list</h1>
          {orders.map((order) => (
            <div key={order._id}>
              {user?.email === order?.email ? (
                <div className="my-4 d-flex flex-row">
                  <ul>
                    <li className="fw-bold display-6">
                      <p className="fw-bold">Order Details</p>
                      <div className="">
                        <h3>OrderId : {order._id}</h3>
                        <h3>Ordered by: {order.name}</h3>
                        <h3>Email : {order.email}</h3>
                        <h3>Phone : {order.phone}</h3>
                        <h3>Number of member : {order.member}</h3>
                        <h3>Package Name : {order.packageName}</h3>
                      </div>
                      {packages.map((packag) =>
                        packag.packageName === order.packageName ? (
                          <Link
                            to={`/package/${packag._id}`}
                            className="btn btn-warning"
                          >
                            Details
                          </Link>
                        ) : (
                          <h1>{""}</h1>
                        )
                      )}
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="">{""}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
  width: 100vw;
  .user {
    display: flex;
    width: 100%;
    height: 100px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
`;

export default Profile;
