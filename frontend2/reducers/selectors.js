export const selectAllProducts = state => Object.values(state.entities.products);

export const selectSingleProduct = (state, product_id) => {
  return state.entities.products[product_id]
};
