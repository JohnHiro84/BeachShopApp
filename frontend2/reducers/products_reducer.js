import {RECEIVE_ALL_PRODUCTS, RECEIVE_SINGLE_PRODUCT} from '../actions/product_actions';
import merge from 'lodash/merge';


const productsReducer = (state ={}, action) => {
  Object.freeze(state);
    let nextState = state;
    let singleProduct;
  switch(action.type){

    case RECEIVE_ALL_PRODUCTS:

      return merge({}, state, action.products);

    case RECEIVE_SINGLE_PRODUCT:

      singleProduct = action.product;
      (nextState.current_product) ? nextState.current_product.reviews = {} : ""

      return merge({}, nextState, { "current_product": singleProduct });

    default:
      return state;
  }
}

export default productsReducer;
