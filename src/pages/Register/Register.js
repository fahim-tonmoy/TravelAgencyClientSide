import { Link, useLocation, useNavigate } from "react-router-dom";

import React from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle, setError, setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location.state?.from || "/home";

  // Google sign in
  const handleGoogleSignUp = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate(redirect_uri);
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <RegisterStyled>
      <div className="container my-5 text-center">
        <div className="box">
          <h2>Please Register</h2>
          <button onClick={handleGoogleSignUp} className="btn btn-warning">
            Google Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>{" "}
          </p>
        </div>
      </div>
    </RegisterStyled>
  );
};

const RegisterStyled = styled.div`
  .container {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 400px;
      height: 400px;
      border: 1px solid gray;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2,
      button,
      p {
        margin-top: 20px;
      }
    }
  }
`;

export default Register;
