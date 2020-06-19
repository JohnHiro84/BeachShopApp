import { connect } from 'react-redux';

import Order from './order';
import { fetchOrders } from '../../actions/order_actions';

const mapStateToProps = ({ session, errors, entities }) => {

  return {
    errors: errors.recipeErrors,
    session_username : entities.users[session.id].username,
    session_id: session.id,
    orders: entities.orders


  };

};

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
