import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/button/button.js';
import {CounterAction} from '../store/actionCreators.js';

const Main = (props) => {
    let navigate = useNavigate();
    const count = useSelector(store=>store.counter);

    return(
        <Container>
            Main <Button onClick={() => navigate("/mypage")} value={"Go mypage"}/> <br />
            count : {count.count} <br />
            <Button value={"+"} onClick={CounterAction.increaseCount} /> <br />
            <Button value={"-"} onClick={CounterAction.decreaseCount}/> <br />
            <Button value={"init"} onClick={CounterAction.initCount}/>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    padding: 20px;
`