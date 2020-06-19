import { connect } from 'react-redux';

import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { userLeaveReviewYet, getPreviousReview, averageStars } from '../../reducers/selectors2';

const mapStateToProps = ({ session, errors, entities }) => {

  let current_product = entities.products.current_product;
  let username = entities.users[session.id].username;

  let hasUserLeftReview = userLeaveReviewYet(username, current_product);
  let previousReview = getPreviousReview(username, current_product);

  let keys = Object.keys(entities.products);

  //if a product page has been previously visited & put product into current_product
  if(keys.length > 0 && keys.includes('current_product')){

    return {
      currentUser: entities.users[session.id],
      currentProduct: entities.products.current_product,
      redirectError: false,
      averageReview: averageStars(entities.products.current_product.reviews, entities.users[session.id].username),
      hasUserLeftReview: hasUserLeftReview,
      newOrEdit: "edit",
      previousReview : previousReview

    };
  } else {

    return {
      currentUser: entities.users[session.id],
      currentProduct: "",
      redirectError: true,
      averageReview: "",
      // errors: errors.recipeErrors,

    }
  }

};

const mapDispatchToProps = dispatch => ({
  buttonReview: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
