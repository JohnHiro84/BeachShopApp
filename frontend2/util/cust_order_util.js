// this fetches all the customer orders for the current signed in user
export const fetchAllCustOrders = () => {
 let orders_promise = $.ajax({
    method: 'GET',
    url: `/api/cust_orders/`
  })
  return orders_promise;
};

export const fetchSingleCustOrder = (custOrderId) => {
 let order_promise = $.ajax({
    method: 'GET',
    url: `/api/cust_orders/${custOrderId}`
  })
  return order_promise;
};


export const createCustOrderUtil = (cust_order) => {

 let order_promise = $.ajax({
    method: 'POST',
    url: `/api/cust_orders/`,
    data: { cust_order }
  })
  return order_promise;
};
