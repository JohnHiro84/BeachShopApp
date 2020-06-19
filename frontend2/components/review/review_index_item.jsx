import React from 'react';
import { Link } from 'react-router-dom';
import {dateAndTimeFormatter} from '../../util/date_util';
import {starCount} from '../../util/star_count_util';

const ReviewIndexItem = ({ review }) => (
  <li className="review-index-item">

    <div>
    <span className="avatar-img-container">
      <img className="avatar-img-review" src={review.avatar_url} alt={review.heading} />
    </span>
    </div>

    <div className='review-right'>
      <h3>{review.author}  </h3>
      <h3>{starCount(review.star_count, review.id)}</h3>
      <h4 className='review-time'>{dateAndTimeFormatter(review.updated_at)}</h4>
      <h3> {review.heading} </h3>
      <h4><span className='review-text'> {review.text}</span></h4>
    </div>

  </li>
);

export default ReviewIndexItem;
