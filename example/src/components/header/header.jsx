import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Header = (props) => {
    const userData = useSelector(store=>store.userData)

    return(
        <Container>
            <ListWrap>
                <ListEl>name : {userData.name}</ListEl>
                <ListEl>job : {userData.job}</ListEl>
                <ListEl>email : {userData.email}</ListEl>
                <ListEl>phone : {userData.phone}</ListEl>
            </ListWrap>
        </Container>
    )
};

export default Header;


const Container = styled.div`
    padding: 20px;
    border-bottom: 1px solid #454545;
`
const ListWrap = styled.ul`
`
const ListEl = styled.li`
    list-style: none;
`