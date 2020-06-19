import { connect } from 'react-redux';

import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { userLeaveReviewYet, itemsUserPurchased, averageStars } from '../../reducers/selectors2';

const mapStateToProps = ({ session, errors, entities }) => {

  let username = entities.users[session.id].username;
  let current_product = entities.products.current_product;

  let hasUserLeftReview = userLeaveReviewYet(username, current_product);
  let keys = Object.keys(entities.products);

  //if a product page has been previously visited &  current_product has a product
  if(keys.length > 0 && keys.includes('current_product')){
    return {
      currentUser: entities.users[session.id],
      currentProduct: current_product,
      redirectError: false,
      averageReview: averageStars(entities.products.current_product.reviews, entities.users[session.id].username),
      hasUserLeftReview : hasUserLeftReview,
      newOrEdit: "new",

    };
  } else {

    //if current_product is empty
    return {
      currentUser: entities.users[session.id],
      currentProduct: "",
      redirectError: true,
      averageReview: '',

    }
  }

};

const mapDispatchToProps = dispatch => ({
  buttonReview: product => dispatch(createReview(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
