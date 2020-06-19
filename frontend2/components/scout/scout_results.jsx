import React from 'react';
import {selectBySearchTerm} from '../../reducers/selectors';
import {Route} from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';
import { convertObjToArray, sortByPriceRating, buttonText } from '../../util/sort-search.js';

class ScoutResults extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      ascDesc: ''
    }
    this.handlePrice = this.handlePrice.bind(this);
    this.handleRating = this.handleRating.bind(this);

  }

  handlePrice(e){
    e.preventDefault;
    const {ascDesc} = this.state;

    if (ascDesc === "" || ascDesc !== "ascPrice"){
      this.setState({ascDesc: 'ascPrice'});

    } else if(ascDesc === 'ascPrice'){
      this.setState({ascDesc: 'descPrice'});

    } else if(ascDesc === "descPrice") {
      this.setState({ascDesc: 'ascPrice'});
    }
    console.log(this.state);
  }

  handleRating(e){
    e.preventDefault;
    const {ascDesc} = this.state;

    if (ascDesc === 'descRating'){
      this.setState({ascDesc: 'ascRating'});

    } else if(ascDesc === 'ascRating'){
      this.setState({ascDesc: 'descRating'});

    } else {
      this.setState({ascDesc: 'ascRating'});
    }
    console.log(this.state);
  }

  render() {

        const {foundProducts, loading, searchTerm} = this.props;

        if(loading){
          return <></>
        }

        let arrayOfProductObjects = convertObjToArray(foundProducts);

        if(this.state.ascDesc !== ""){
          arrayOfProductObjects = sortByPriceRating(arrayOfProductObjects, this.state.ascDesc);
        }

        let products = "";
        let buttons;

        if(arrayOfProductObjects.length > 0){
          products = [];

          for(let i = 0; i< arrayOfProductObjects.length; i++){

            let prod = arrayOfProductObjects[i];

            if(prod.id !== undefined){

              products.push(
                <ProductIndexItem
                key={`product-index-item${prod.id}`}
                product={prod} />
              );
            }
          }
          let objText = buttonText(this.state.ascDesc);
          buttons = (<>
                      <span className="scout-sort">
                        <button className="scout-sort-buttons" onClick={this.handlePrice}>Price</button>
                        <button className="scout-sort-buttons" onClick={this.handleRating}>Rating </button>
                        {objText['price']}{objText['rating']}
                      </span>
                    </>);
        } else {
          products = (<p className="search-results-none">No results found</p>);
        }


    return (
      <div className="product-list-container container">
      {buttons}
        <span className="search-results-notification">
          {searchTerm.length > 0 ? ("Your results for: " + searchTerm) : "" }
        </span>
        {products}
      </div>
    );
  }
}


export default ScoutResults;
