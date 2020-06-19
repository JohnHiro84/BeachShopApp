import { connect } from 'react-redux';
import ProductList from './product_list';

// Actions
import { fetchProducts} from '../../actions/product_actions';
import { selectAllProducts } from '../../reducers/selectors';

const mapStateToProps = state => ({
  products: selectAllProducts(state),
  loading: state.ui.loading.indexLoading

});

const mapDispatchToProps = dispatch => ({
  fetchMeProducts: () => dispatch(fetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
