import PrimaryButton from '../../Contact/contactItem/PrimaryButton';
import React from 'react';
import styled from 'styled-components';

const Form = () => {
    return (
        <FormStyled>
            <div className="left-content">
                            <form className='form'>
                                <div className="form-field">
                                    <label htmlFor="name"  >Enter Your Name</label>
                                    <input type="text" id='name'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email"  >Enter Your Email</label>
                                    <input type="email" id='email'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="subject"  >Enter Your subject</label>
                                    <input type="text" id='subject'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="text-area">Enter your Message</label>
                                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form-field">
                                    <PrimaryButton title='Submit' />
                                </div>
                            </form>
                        </div>
        </FormStyled>
    );
};

const FormStyled = styled.div`
.left-content {
    .form {
            width: 100%;
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: white;
                    padding: 0 .5rem;
                    color: inherit;
                }
                input {
                    border: 1px solid gray;
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea {
                    background-color: transparent;
                    border: 1px solid gray;
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
        }
`;

export default Form;