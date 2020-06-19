import {
  RECEIVE_ALL_ORDERS,
  RECEIVE_SINGLE_ORDER
} from '../actions/order_actions';

import merge from 'lodash/merge';
import {
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const productsReducer = (state ={}, action) => {

  Object.freeze(state);

  let nextState = state;
  let singleOrder;

  switch(action.type){

    case RECEIVE_ALL_ORDERS:
      return merge({}, state, action.orders);

    case RECEIVE_SINGLE_ORDER:
      singleOrder = action.order;
      return merge({}, nextState, { "current_order": singleOrder });

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default productsReducer;
