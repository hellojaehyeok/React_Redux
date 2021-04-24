redux-react 기초세팅 및 사용방법입니다.       
redux는 전역에서 사용 가능한 변수 저장소라고 생각하면 이해하기 쉽다.       
react에서 정보를 전달할 때는 props를 이용하여 부모, 자식 간 이동을 해야 하는데       
그 규모가 방대해지면 코드가 어지럽고 관리하기 어렵다.       
redux는 따로 정보를 넘길 필요 없이 redux에 저장된 변수를 변경되면        
사용하고 있는 파일은 자동적으로 렌더링 된다.        


# Redux 설치

설치       

    npm i redux
    npm i react-redux


action에 대한 오류가 나면 아래 코드를 package.json에 작성 후 npm install 한다.      

    "react-redux": "7.2.3",
    "redux": "4.0.5",
    "redux-actions": "^2.6.5",


# index.js
react-redux와 store를 import한다.       
Provider store={store} 로 감싼다.        


index.js        

    import { Provider } from 'react-redux';
    import store from './store';
    .
    .
    .
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter >
            <Route path="/" component={App} />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
        


# Components
actionCreators의 경로를 지정해 준다.       
DeliveryDataAction는 store에 있는 데이터를 수정할 때 사용한다.       


useSelector 를 사용하여 저장한 데이터에 접근한다.        
아래 변수를 생성하여 deliveryData 를 통하여 불러온다.       


    import { DeliveryDataAction } from './store/actionCreators';
    import { useSelector } from 'react-redux';
    .
    .
    .
    const deliveryData = useSelector(state=>{ return state.deliveryData});
    .
    .
    .
    DeliveryDataAction.updateDeliveryData({  deliveryData:{}  });
    

useSelector 로 받아온 데이터는 직접적으로 수정이 불가능하여       
JSON.parse(JSON.stringify( -data- )) 를 사용하여 변수를 따로 만든 후 수정한다.       


    let resultObject = JSON.parse(JSON.stringify(deliveryData.cartData));


위 코드에서 데이터를 찾지 못하거나 변경이 안 되는 것 같다 싶으면  redux 코드를 다시       
확인하거나 state를 콘솔에 찍어 제대로 접근하고 있는지 확인한다.       

    const stateData = useSelector(state=>{ return state});



# Store
store 폴더를 따로 만들어 파일을 관리한다.      
기본적으로 필요한 파일은 4개이다.       
1. ./store/index.js   -> default
2. ./store/configure.js  -> default
3. ./store/actionCreators.js  ->  제작한 redux파일을 모아 export한다.
4. ./store/modules/index.js   ->  제작한 redux파일을 모아 export한다.

이후 원하는 js를 만들어 초깃값을 정리한다. 
1. deliveryData.js  