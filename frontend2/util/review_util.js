export const fetchAllReviews = () => {
 let reviews_promise = $.ajax({
    method: 'GET',
    url: `/api/reviews/`
  })
  return reviews_promise;
};

/////////////get all reviews for a particular product
export const fetchAllReviews2 = (prodId) => {
 let reviews_promise = $.ajax({
    method: 'GET',
    url: `/api/products/${prodId}`
  })
  return reviews_promise;
};


export const fetchSingleReview = (reviewId) => {
 let review_promise = $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
  return review_promise;
};


export const createReviewUtil = (review) => {

 let review_promise = $.ajax({
    method: 'POST',
    url: `/api/reviews/`,
    data: { review }
  })
  return review_promise;
};


export const deleteReview = (review) => {
  let apromise = $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
  return apromise;
}


export const updateReview = (review) => {
  // console.log(review);
  let apromise = $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
  return apromise;
}
