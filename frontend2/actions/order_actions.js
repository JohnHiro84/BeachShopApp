import * as CustOrderAPIUtil from '../util/cust_order_util';


export const RECEIVE_ALL_ORDERS = 'RECEIVE_ALL_ORDERS';
export const RECEIVE_SINGLE_ORDER = "RECEIVE_SINGLE_ORDER";

export const receiveOrders = orders => ({
  type: RECEIVE_ALL_ORDERS,
  orders
})

export const receiveSingleOrder = order => ({
  type: RECEIVE_SINGLE_ORDER,
  order
});

export const fetchOrders = () => dispatch => (
  CustOrderAPIUtil.fetchAllCustOrders().then(orders => dispatch(receiveOrders(orders)))
)

export const createOrder = (cust_order) => (dispatch) => (
  CustOrderAPIUtil.createCustOrderUtil(cust_order)
  .then(() => { dispatch(fetchOrders())
  })
);
