import React from 'react';
import styled from 'styled-components';

const Button = ({value, onClick}) => {
    return(
        <ButtonUI onClick={onClick}>{value}</ButtonUI>
    )
};

export default Button;

const ButtonUI = styled.button`
    padding: 10px;
    background-color: transparent;
    border: 1px solid salmon;
    color: #454545;
    border-radius: 5px;
`