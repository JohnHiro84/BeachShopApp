
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART = "UPDATE_CART";

export const receiveProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  product
});

export const clearCart = () => ({
  type: CLEAR_CART
});


export const updateCart = products => ({
  type: UPDATE_CART,
  products
});
