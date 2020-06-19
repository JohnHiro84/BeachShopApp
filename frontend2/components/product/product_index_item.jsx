import React from 'react';
import { Link } from 'react-router-dom';
import {starCount} from '../../util/star_count_util';

const ProductIndexItem = ({ product }) => (

  <div className="product-index-item">
    <div className="product-index-item-image">
    <Link to={`/api/products/${product.id}`}>
      <span className='product-link-entire-div'></span>
      <img className="product-small-img" src={product.image_url} alt={product.name} />
      </Link>
    </div>

    <div className="product-index-item-text">
    <Link to={`/api/products/${product.id}`}>
      <span className='product-link-entire-div'></span>
      <p className='star-line'>{starCount(Math.round(product.ave_review), product.id)} ({product.ave_review})</p>
      <h3>{product.name} </h3>
      <p>${product.price}</p>
      <p>{product.product_type}</p>
      </Link>
    </div>
  </div>

);

export default ProductIndexItem;
