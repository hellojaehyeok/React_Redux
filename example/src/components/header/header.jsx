import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    

    return(
        <Container>
            name : 
            job :
            email :
            phone :
        </Container>
    )
};

export default Header;


const Container = styled.div`
    padding: 20px;
    border-bottom: 1px solid #454545;
`