import React from 'react';



export const starCount = function(num, id){

  let arrStars = [
                  <span key={id + "-" + 0} className="star-review star-review-yellow"></span>,
                  <span key={id + "-" + 1} className="star-review star-review-yellow"></span>,
                  <span key={id + "-" + 2} className="star-review star-review-yellow"></span>,
                  <span key={id + "-" + 3} className="star-review star-review-yellow"></span>,
                  <span key={id + "-" + 4} className="star-review star-review-yellow"></span>
                ]

  let j = num;

  while(j < 5){

    arrStars[j] =(<span key={id + "-" + j} className="star-review star-review-gray"></span>);
    j++;
  }
  return arrStars;
}
