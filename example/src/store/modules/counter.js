
const INCREASE_COUNT = 'counter/INCREASE_COUNT';
const DECREASE_COUNT = 'counter/DECREASE_COUNT';
const INIT_COUNT = 'counter/INIT_COUNT';

export const increaseCount = ()=>({type:INCREASE_COUNT});
export const decreaseCount = ()=>({type:DECREASE_COUNT});
export const initCount = ()=>({type:INIT_COUNT});


const initialState = {
    count:0,
}

export default function counter(state=initialState, action){
    
    switch(action.type){
        case INCREASE_COUNT:
            console.log(action)
            console.log(state)
            return {...state, count:state.count+1};
        case DECREASE_COUNT:
            return {...state, count:state.count-1};
        case INIT_COUNT:
            return initialState;
        default:
            return state;
    }
}