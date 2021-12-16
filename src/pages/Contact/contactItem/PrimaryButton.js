import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({title}) => {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
background-color: #3e6379;
padding: .8rem 2.5rem;
color: white;
cursor: pointer;
display: inline-block;
font-size: inherit;
text-decoration: none;
text-transform: uppercase;
position: relative;
transition: all 0.4s ease-in-out;
&::after {
    content: "";
    position: absolute;
    width: 0;
    height: .2rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
}
&:hover::after {
    width: 100%;
    background-color: white;
}
`;

export default PrimaryButton