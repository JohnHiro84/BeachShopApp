import React from 'react';
import ProductIndexItem from './product_index_item';
import LoadingIcon from './loading_icon';


class ProductList extends React.Component {
  componentDidMount() {
    if(this.props.products.length < 2){
      this.props.fetchMeProducts();
    }
  }




  render() {
    const {products, loading } = this.props;
    // console.log(loading);
    // if (loading) { return <LoadingIcon />; }

    let productList = (<p>No results found</p>);

    //create IndexItems for each product, excluding current_product if it exists
    if(products.length > 0){
      productList = [];
      for(let i =0; i< products.length; i++){
        let prod = products[i];
        if(products[i].price > 0){
          productList.push(
            <ProductIndexItem
            key={`product-index-item${prod.id}`}
            product={prod} />
          );
        }
      }
    }
    if(loading){
      return <></>
    }
    return(
      <div className="product-list-container container">
          {productList}
      </div>
    );
  }
}

export default ProductList;
