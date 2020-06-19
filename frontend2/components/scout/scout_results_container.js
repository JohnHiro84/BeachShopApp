import { connect } from 'react-redux';

import ScoutResults from './scout_results';
import {productsBySearchTerm } from '../../reducers/selectors2';

const mapStateToProps = ({ui, entities, search}) => {

  let allProducts = entities.products;
  let foundProducts = productsBySearchTerm(search.term, allProducts);

  return {
    foundProducts : foundProducts,
    loading: ui.loading.indexLoading,
    searchTerm: search.term

  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoutResults);
