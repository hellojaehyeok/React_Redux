import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = (props) => {
    let navigate = useNavigate();

    return(
        <Container>
            Main <button onClick={() => navigate("/mypage")}>Go mypage</button>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    padding: 20px;
`