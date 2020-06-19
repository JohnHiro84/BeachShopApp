import * as ReviewAPIUtil from '../util/review_util';

export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveSingleReview = review => ({
  type: RECEIVE_SINGLE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
//
export const createReview = (review) => (dispatch) => (
  ReviewAPIUtil.createReviewUtil(review)
  .then(review => {console.log(review);
  })

);

export const updateReview = (review) => (dispatch) => (
  ReviewAPIUtil.updateReview(review)
  .fail(err => dispatch(receiveReviewErrors(err.response.JSON)))

)
