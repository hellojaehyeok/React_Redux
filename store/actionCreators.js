import { bindActionCreators } from 'redux';
import * as deliveryDataAction from './modules/deliveryData';

import store from './index';

const { dispatch } = store;

export const DeliveryDataAction = bindActionCreators(deliveryDataAction, dispatch);