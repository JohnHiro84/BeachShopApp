
export const fetchProducts = () => {
  let apromise = $.ajax({
    method: 'GET',
    url: '/api/products'
  })
  return apromise;
}

export const fetchSingleProduct = (id) => {
  let apromise = $.ajax({
    method: 'GET',
    url: `/api/products/${id}`
  })
  return apromise;
}



export const updateProduct = (product) => {
  // console.log(product);
  let apromise = $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: { product }
  });
  return apromise;
}
