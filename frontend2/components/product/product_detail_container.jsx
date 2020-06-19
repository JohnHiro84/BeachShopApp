import { connect } from 'react-redux';
import React from 'react';

import ProductDetail from './product_detail';
import { requestSingleProduct } from '../../actions/product_actions';
import { receiveProductToCart, clearCart } from '../../actions/cart_actions';
import { fetchOrders } from '../../actions/order_actions';
import {selectSingleProduct} from '../../reducers/selectors';
import { itemsUserPurchased } from '../../reducers/selectors2';

const mapStateToProps = (state, ownProps) => {

  const session_username = state.entities.users[state.session.id].username;

  let arrItems = itemsUserPurchased(state.entities.orders);

  let productId = ownProps.match.params['productId'];

  return {
    'session_username' :session_username,
    'session_id' : state.session.id,
    'orders' : state.entities.orders,
    'itemsPurchased' : arrItems,
     'loading': state.ui.loading.detailLoading

  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleProduct: id => dispatch(requestSingleProduct(id)),
  receiveProductToCart: product => dispatch(receiveProductToCart(product)),
  clearCart: () => dispatch(clearCart()),
  fetchOrders: () => dispatch(fetchOrders())

});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
