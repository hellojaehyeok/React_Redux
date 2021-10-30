import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의해줍니다.
const UPDATE_FRUIT = 'uesr/fruit';
const UPDATE_STRAWBERRY = 'uesr/strawberry';
const UPDATE_RESET = 'uesr/reset';

// 액션 생성 함수를 만듭니다.
export const updateFruit = createAction(UPDATE_FRUIT);
export const updateStrawberry = createAction(UPDATE_STRAWBERRY);
export const updateReset = createAction(UPDATE_RESET);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  fruit:{
      apple:0,
      banana:0,
  },
  strawberry:{count: 0},
}

// immer 를 사용하여 값을 수정하는 리듀서입니다.
export default handleActions({
  [UPDATE_FRUIT]: (state, action) => {
    return {...state, fruit : action.payload.fruit}
  },

  [UPDATE_STRAWBERRY]: (state, action) => {
    return {...state, strawberry : action.payload.strawberry}
  },
  [UPDATE_RESET]: (state, action) => {
    return {...action.payload}
  },
}, initialState);