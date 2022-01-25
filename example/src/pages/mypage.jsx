import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserDataAction } from '../store/actionCreators';

const MyPage = (props) => {
    let navigate = useNavigate();
    const userData = useSelector(store=>store.userData)
    const [name, setName] = useState(userData.name);
    const [job, setJob] = useState(userData.job);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);


    useEffect(()=>{
        setName(userData.name);
        setJob(userData.job);
        setEmail(userData.email);
        setPhone(userData.phone);
    }, [userData])
    
    const onClickSave = () => {
        UserDataAction.modifyUserData({
            name,
            job,
            email,
            phone,
        }) 
    }

    const onClickInit = () => {
        UserDataAction.initUserData()
    }

    return(
        <Container>
            <Title>
                Mypage <button onClick={() => navigate("/")}>Go main</button>
            </Title>

            <InputWrap>
                <Input placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
                <Input placeholder="job" value={job} onChange={e=>setJob(e.target.value)}/>
                <Input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <Input placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
            </InputWrap>
            <button onClick={onClickSave}>save data</button> <br />
            <button onClick={onClickInit}>init</button>
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