import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyPage = (props) => {
    let navigate = useNavigate();

    const inputData = [
        {placeholder:"name"},
        {placeholder:"job"},
        {placeholder:"email"},
        {placeholder:"phone"},
    ]

    return(
        <Container>
            <Title>
                Mypage <button onClick={() => navigate("/")}>Go main</button>
            </Title>

            <InputWrap>
                {
                    inputData.map((item, index) => {
                        return(
                            <Input placeholder={item.placeholder} key={index}></Input>
                        )
                    })
                }
            </InputWrap>
        </Container>
    )
};

export default MyPage;

const Container = styled.div`
    padding: 20px;
`
const Title = styled.div`
    margin-bottom: 40px;
`
const InputWrap = styled.div`
    display:flex;
    flex-direction: column ;
`
const Input = styled.input`
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
`