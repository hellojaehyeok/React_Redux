import { bindActionCreators } from 'redux';
import * as fruitDataAction from './modules/fruitData';

import store from './index';

const { dispatch } = store;

export const FruitDataAction = bindActionCreators(fruitDataAction, dispatch);