import startCase from 'lodash';


export const userLeaveReviewYet = function(session_username, currentProduct){
  if(!currentProduct){
    return false;
  }
  if(currentProduct.reviews === undefined){
    return false;
  }
  let keys = Object.keys(currentProduct.reviews);
  // console.log(currentProduct.reviews)
  for(let i=0; i<keys.length; i++){
    if (currentProduct.reviews[keys[i]].author === session_username){
      return true
    }
  }
  return false
}

export const getPreviousReview = function(session_username, currentProduct){
  if(!currentProduct){
    return false;
  }
  let keys = Object.keys(currentProduct.reviews);
  // console.log(currentProduct.reviews)
  for(let i=0; i<keys.length; i++){
    if (currentProduct.reviews[keys[i]].author === session_username){
      return currentProduct.reviews[keys[i]];
    }
  }
  return false
}

export const itemsUserPurchased = function(orders){
  let product_ids = [];
  let output = [];

  let keys = Object.keys(orders);

  for(let j = 0; j< keys.length; j++){

    let key = keys[j];
    if(product_ids)
    product_ids = product_ids.concat(Object.keys(JSON.parse(orders[key].products)));
  }

  for(let i = 0; i<product_ids.length; i++){
    if(!output.includes(product_ids[i])){
      output.push(product_ids[i])
    }
  }

  return output;
}





export const productsBySearchTerm = (term, products) => {

  let foundProducts = {};
  let keys = Object.keys(products);
  let upperTerm = _.startCase(term);
  for(let i =0; i< keys.length; i++){
    let product = products[keys[i]];
    var regex = new RegExp('\\b' + upperTerm + '\\b');
    let prodName = _.startCase(product.name);
    let prodDesc = _.startCase(product.description);
    let prodType = _.startCase(product.product_type);

    let termFound = (regex.test(prodName) || regex.test(prodDesc) || regex.test(prodType) ) ?  true : false
    if(termFound) foundProducts[product.id] = product;
  }
  // console.log(foundProducts)
  return foundProducts;

};

export const averageStars = (reviews, username) => {
  let outputObj = {
    'total_stars': 0,
    'num_reviews' : 0
  };

  if(reviews === undefined){
    return outputObj;
  }
  let keys = Object.keys(reviews);

  for(let i = 0; i< keys.length; i++){

    if(username !== reviews[keys[i]].author){

      outputObj['total_stars'] += reviews[keys[i]].star_count;
      outputObj['num_reviews'] += 1;
    }
  }
  return outputObj;
}
