import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다.
const UPDATE_DELIVERYDATA = 'uesrInfoAction/updateDeliveryAction';
const UPDATE_CARTDATA = 'uesrInfoAction/updateCartAction';

// 액션 생성 함수를 만듭니다.
export const updateDeliveryData = createAction(UPDATE_DELIVERYDATA);
export const updateCartData = createAction(UPDATE_CARTDATA);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  deliveryData:{
      name:"",
      phone:"", 
      address:"",
  },
  cartData:{},
}

// immer 를 사용하여 값을 수정하는 리듀서입니다.
export default handleActions({
  [UPDATE_DELIVERYDATA]: (state, action) => {
    return produce(state, draft => {
      draft.deliveryData = action.payload.deliveryData ? action.payload.deliveryData : draft.deliveryData;
    });
  },
  [UPDATE_CARTDATA]: (state, action) => {
    return produce(state, draft => {
      draft.cartData = action.payload.cartData ? action.payload.cartData : draft.cartData;
    });
  },
}, initialState);