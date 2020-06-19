import merge from 'lodash/merge';

import {ADD_PRODUCT_TO_CART, CLEAR_CART, UPDATE_CART } from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = {
  cartProducts: []
}

const cartsReducer = (oldState = defaultState, action) => {

  let product;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let product = action.product;

      return{
        cartProducts: [
          ...oldState.cartProducts,
          action.product
        ]
}

    case UPDATE_CART:
      return {
        cartProducts: action.products
      }
    case CLEAR_CART:
      return defaultState;
    case LOGOUT_CURRENT_USER:
          return defaultState;
    default:
      return oldState;
  }
};

export default cartsReducer;
