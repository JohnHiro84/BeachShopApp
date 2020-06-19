import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import ProductListContainer from './product/product_list_container';
import ProductDetailContainer from './product/product_detail_container';

import ReviewFormContainerNew from './review/review_form_container_new';
import ReviewFormContainerEdit from './review/review_form_container_edit';

import CartContainer from './cart/cart_container';

import OrderContainer from './order/order_container';

import Scout from './scout/scout_container';
import ScoutResultsContainer  from './scout/scout_results_container';

import MainContainer  from './main/main_container';

import ProfileContainer from './profile/profile_container';

const App = () => (
  <div className="app-container">
    <header className="app.jsx">

    </header>
      <GreetingContainer />
      <Scout />

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <ProtectedRoute exact path="/" component={MainContainer} />
      <ProtectedRoute exact path="/api/products/" component={ProductListContainer} />
      <ProtectedRoute path="/api/products/:productId" component= {ProductDetailContainer} />

      <ProtectedRoute path="/api/newReview/" component= {ReviewFormContainerNew} />
      <ProtectedRoute path="/api/editReview/" component= {ReviewFormContainerEdit} />

      <ProtectedRoute exact path="/cart" component={CartContainer} />
      <ProtectedRoute exact path="/yourOrders" component={OrderContainer} />
      <ProtectedRoute exact path="/api/searchResults" component={ScoutResultsContainer} />

      <ProtectedRoute exact path="/api/profile" component={ProfileContainer} />

    </Switch>


  </div>
);

export default App;
