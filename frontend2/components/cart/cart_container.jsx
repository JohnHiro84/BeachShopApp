import { connect } from 'react-redux';
import Cart from './cart';
import { createOrder } from '../../actions/order_actions';
import { clearCart, updateCart } from '../../actions/cart_actions';

const mapStateToProps = ({ session, errors, entities }) => {

  return {
    errors: errors.recipeErrors,
    session_username : entities.users[session.id].username,
    session_id: session.id,
    redirectError: false,
    cart: entities.carts.cartProducts
  };

};

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order)),
  clearCart: () => dispatch(clearCart()),
  updateCart: products => dispatch(updateCart(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
