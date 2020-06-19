import React from 'react';
import ReactDOM from 'react-dom';


import Root from './components/root';
import configureStore from './store/store';
import {createReview} from './actions/review_actions';
import {receiveProductToCart, clearCart} from './actions/cart_actions';
import {createOrder} from './actions/order_actions';
import {fetchOrders} from './actions/order_actions';
import {updateReview} from './actions/review_actions';

import {receiveSearchTerm, clearTerm} from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser){
    const preloadedState = {
      session: {id: window.currentUser.id},
      entities: {
        users : {[window.currentUser.id] : window.currentUser}
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
    // window.store = store;
    // window.createReview = createReview;
    // window.receiveProductToCart = receiveProductToCart;
    // window.clearCart = clearCart;
    // window.createOrder = createOrder;
    // window.fetchOrders = fetchOrders;
    // window.updateReview = updateReview;
    //
    // window.receiveSearchTerm = receiveSearchTerm;
    // window.clearTerm = clearTerm;

    console.log('beach_shop')
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
