import { Container, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";

const SecondTopHeader = () => {
  const { user, logOut } = useAuth();
  // console.log(user.displayName);
  return (
    <SecondTopHeaderStyled>
      <Navbar
        className="navigation"
        collapseOnSelect
        expand="lg"
        bg=""
        variant="light"
      >
        <Container className="nav-container">
          <Navbar.Brand className="brand" to="/home">
            TRAVEL GURU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end navigation">
            <Link className="nav-link fw-bolder" to="/home">
              Home
            </Link>
            <Link className="nav-link fw-bolder" to="/about">
              About Us
            </Link>
            <Link className="nav-link fw-bolder" to="/contact">
              Contact
            </Link>
            {!user?.email ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Navbar.Text className="login-name">
                <Link to="/myorder" className="fw-bold text-black">
                  My Orders
                </Link>
                <Link to="/profile" className="fw-bold text-success">
                  {user.displayName}
                </Link>
                <Link className="fw-bold text-danger" onClick={logOut} to="/">
                  LogOut
                </Link>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </SecondTopHeaderStyled>
  );
};

const SecondTopHeaderStyled = styled.div`
  margin-top: -10px;
  margin-bottom: -10px;
  .navigation {
    /* background-color: red; */
    .nav-container {
      /* border: 1px solid gray; */
      border-radius: 10px;
      background-color: white;
      margin-top: -20px;
      z-index: 10;
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      .brand {
        font-weight: 900;
        font-size: 30px;
      }
      .nav-link {
        margin-left: 20px;
        color: black;
      }
      .nav-link:hover {
        color: green;
      }
      .login-name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        margin-left: 15px;
        margin-bottom: -7px;
        a {
          text-decoration: none;
          margin-left: 20px;
          color: #5bce5b;
          margin-top: -7px;
        }
      }
    }
  }
`;

export default SecondTopHeader;
