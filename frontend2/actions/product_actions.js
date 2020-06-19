import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = "RECEIVE_SINGLE_PRODUCT";

export const START_LOADING_ALL_PRODUCTS = 'START_LOADING_ALL_PRODUCTS';
export const START_LOADING_SINGLE_PRODUCT = 'START_LOADING_SINGLE_PRODUCT';

export const receiveProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
})

export const receiveSingleProduct = product => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product
});

export const startLoadingAllProducts = () => ({
  type: START_LOADING_ALL_PRODUCTS
});

export const fetchProducts = () => dispatch => {
  dispatch(startLoadingAllProducts());
  return APIUtil.fetchProducts().then(products =>{ dispatch(receiveProducts(products) ) });

}


export const startLoadingSingleProduct = () => ({
  type: START_LOADING_SINGLE_PRODUCT
});

export const requestSingleProduct = (id) => (dispatch) => {
  dispatch(startLoadingSingleProduct());
  return APIUtil.fetchSingleProduct(id).then(product => {
    dispatch(receiveSingleProduct(product));
    return product;
  });
}
