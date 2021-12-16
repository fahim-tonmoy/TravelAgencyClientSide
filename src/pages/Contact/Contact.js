import Details from "../components/Contact/Details";
import Form from "../components/Contact/Form";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <div className="container">
      <ContactPageStyle>
        <div className="contact-title">
          <h1 className="text-center">Get In Touch</h1>
          <hr />
        </div>
        <div className="contact-section row my-5">
          <Form />
          <Details />
        </div>
      </ContactPageStyle>
    </div>
  );
};

const ContactPageStyle = styled.section`
  margin: 60px 0;
  .contact-title {
    h4 {
      color: red;
      padding: 1rem 0;
      font-size: 1.8rem;
    }
    hr {
      margin: auto;
      width: 150px;
      border: 1px solid gray;
      border-radius: 10px;
    }
  }
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    .contact-section {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/
    .contact-section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Contact;
