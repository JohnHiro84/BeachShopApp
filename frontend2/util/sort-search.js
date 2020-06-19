export const convertObjToArray = function(products){
  let keys = Object.keys(products);
  let array = [];
  // console.log(array)
  for(let i = 0;  i < keys.length; i++){
    array.push(products[keys[i]]);
  }
  // console.log(array);
  return array;
}

export const sortByPriceRating = function(products, ascDesc){
  // console.log(products)
  let arrayOfProducts = products;

  if(ascDesc === 'ascPrice'){
    arrayOfProducts.sort(function(a, b){
      return a.price - b.price;
    })
  } else if(ascDesc === 'descPrice'){
    arrayOfProducts.sort(function(a, b){
      return b.price - a.price;
    })
  }
  if(ascDesc === 'ascRating'){
    arrayOfProducts.sort(function(a, b){
      return b.ave_review - a.ave_review;
    })
  } else if(ascDesc === 'descRating'){
    arrayOfProducts.sort(function(a, b){
      return a.ave_review - b.ave_review;
    })
  }

  return arrayOfProducts;

}

export const buttonText = function(ascDesc){
  let obj = {
    'rating' : "",
    'price': ""
  };

  if (ascDesc === 'ascRating'){
    obj['rating'] = "High - Low" ;
  } else if(ascDesc === 'descRating'){
    obj['rating'] = "Low - High" ;
  } else {
    obj['rating'] = "" ;
  }


  if (ascDesc === 'ascPrice'){
    obj['price'] = "Low - High" ;
  } else if(ascDesc === 'descPrice'){
    obj['price'] = "High - Low" ;
  } else {
    obj['price'] = "" ;
  }
  return obj;
}
