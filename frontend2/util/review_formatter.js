export var formatReview = function(review){
  //returns either the formatted Review or an Errors Object
  let output_object = {};
  let array_keys = Object.keys(review);
  let errors = [];

  output_object["author"] = review["author"];
  output_object["product_id"] = review["product_id"];
  output_object['avatar_url'] = review['avatar_url'];

  if ( review["star_count"] > 0 && review["star_count"] <=5){
    output_object["star_count"] = review["star_count"];
  } else {
    errors.push("Please select the number of stars you'd give this product.");
  }


  if ( review["heading"].length > 0){
    output_object["heading"] = review["heading"];
  } else {
    errors.push("Please Fill out a heading for your review.");
  }


  if ( review["text"].length > 0){
    output_object["text"] = review["text"];
  } else {
    errors.push("Please Fill out the text field with your review.");
  }


  if(errors.length > 0){
    return { 'errors' : errors };
  }
  // console.log(output_object);
  return output_object;
}


//is this used still?
// export var formatImage = function(image){
//   let formattedImage;
//   var regex = new RegExp('\\b' + 'images' + '\\b');
//
//   if(image[0] === " "){
//     formattedImage = image.slice(1, image.length);
//   } else if (image[1] === " "){
//     formattedImage = image.slice(2, image.length);
//   }else if (regex.test(image) === true){
//     formattedImage = image.slice(7, image.length)
//   } else {
//     formattedImage = image;
//   }
//
//   return formattedImage;
// }
