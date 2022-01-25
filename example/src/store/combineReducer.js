import { combineReducers } from 'redux';
import userData from './modules/userData';

//  슬라이스 리듀서 함수들로 이루어진 객체
export default combineReducers({
    userData,
})