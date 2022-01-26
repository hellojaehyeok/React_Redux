import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/main';
import MyPage from './pages/mypage';
import Header from './components/header/header';
import { UserDataAction } from './store/actionCreators';
import { useEffect } from 'react';

// 서버에 담긴 정보
const userData = {
  name:"jae hyeok",
  job: "Front-end Developer",
  email:"wakij6587@gmail.com",
  phone:"01011112222",
}

function App() {

  useEffect(()=>{
    UserDataAction.modifyUserData(userData)
  }, [])

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
