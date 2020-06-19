import { connect } from 'react-redux';
import React from 'react';

import Main from './main';
import { receiveSearchTerm, clearTerm } from '../../actions/search_actions';
import { fetchProducts} from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    loading: state.ui.loading.detailLoading,
    products: state.entities.products
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  receiveSearchTerm: (term) => dispatch(receiveSearchTerm(term)),

});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
