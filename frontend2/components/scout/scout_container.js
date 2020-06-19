import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Scout from './scout';

import { receiveSearchTerm, clearTerm } from '../../actions/search_actions';
import { fetchProducts} from '../../actions/product_actions';

const mapStateToProps = ({ ui, session, entities: { users, products }, search }) => {
  return {
    products: products,
    currentUser: users[session.id],
    searchTerm: search.term,
    loading: ui.loading.indexLoading

  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  receiveSearchTerm: (term) => dispatch(receiveSearchTerm(term)),
  clearTerm: () => dispatch(clearTerm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scout);
