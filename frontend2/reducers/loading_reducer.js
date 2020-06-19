import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  START_LOADING_ALL_PRODUCTS,
  START_LOADING_SINGLE_PRODUCT
} from '../actions/product_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_ALL_PRODUCTS:
      return Object.assign({}, state, { indexLoading: false });

    case RECEIVE_SINGLE_PRODUCT:
      return Object.assign({}, state, { detailLoading: false });

    case START_LOADING_ALL_PRODUCTS:
      return Object.assign({}, state, { indexLoading: true });

    case START_LOADING_SINGLE_PRODUCT:
      return Object.assign({}, state, { detailLoading: true });

    default:
      return state;
  }
};

export default loadingReducer;
