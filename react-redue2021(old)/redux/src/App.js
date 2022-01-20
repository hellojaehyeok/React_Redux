import logo from './logo.svg';
import './App.css';

// Redux
import { FruitDataAction } from './store/actionCreators';  // 정보를 수정할 때 사용합니다.
import { useSelector } from 'react-redux'; // 정보를 가져올 때 사용합니다.

// Redux
import resetFruit from './resetFruit'; 

function App() {
  const fruitData = useSelector(store=>{ return store.fruitData}); // useSelector를 이용하여 store.fruitData에 접근합니다.
  const fruitRedux = JSON.parse(JSON.stringify(fruitData.fruit)); // fruitData안에있는 fruit에 접근합니다.
  const strawberryRedux = JSON.parse(JSON.stringify(fruitData.strawberry));; // fruitData안에있는 strawberry에 접근합니다.

  // 버튼 컴포넌트
  const btnComponent = (name) => {
    return(
      <div>
        <button className="plus" onClick={() => onClickPlus(name)}> + </button>
        <button className="minus" onClick={() => onClickMinus(name)}> - </button>
      </div>
    )
  }
  // + 버튼 클릭
  const onClickPlus = (name) => {
    if(name == "strawberry"){
      strawberryRedux.count += 1; // 가져온 데이터를 수정합니다.
      FruitDataAction.updateStrawberry({strawberry:strawberryRedux}); // 수정한 데이터를 적용합니다.
      return;
    }

    if(name == "apple"){
      fruitRedux.apple += 1;
    }else if(name == "banana"){
      fruitRedux.banana += 1;
    }
    FruitDataAction.updateFruit({fruit:fruitRedux});
  }
  // - 버튼 클릭
  const onClickMinus = (name) => {
    if(name == "strawberry"){
      strawberryRedux.count -= 1;
      FruitDataAction.updateStrawberry({strawberry:strawberryRedux});
      return;
    }

    if(name == "apple"){
      fruitRedux.apple -= 1;
    }else if(name == "banana"){
      fruitRedux.banana -= 1;
    }
    FruitDataAction.updateFruit({fruit:fruitRedux});
  }
  // 초기화 버튼 클릭
  const onClickReset = () => {
    // 외부에서 가져온 초기redux(resetFruit)을 넣어 초기화합니다. 
    FruitDataAction.updateReset(resetFruit);
  }

  return (
    <div className="App">
      <h1>React - Redux</h1>
      <div className="listContainer">
        <ul className="listWrap">
          <li>
            사과 : {fruitRedux.apple} {btnComponent("apple")}
          </li>
          <li>
            바나나 : {fruitRedux.banana} {btnComponent("banana")}
          </li>
          <li>
            딸기 : {strawberryRedux.count} {btnComponent("strawberry")}
          </li>
        </ul>
        <button onClick={() => onClickReset()} className="reset">초기화</button>
      </div>
    </div>
  );
}

export default App;
