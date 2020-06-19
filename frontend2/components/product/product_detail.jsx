import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReviewIndexItem from '../review/review_index_item';
import LoadingIcon from './loading_icon';
import {starCount} from '../../util/star_count_util';


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'product' : {
        name: "",
        description: "",
        product_type: "",
        price: "",
        image_url: ''
      },
      'reviews' : {
        0 : {
          id: 0,
          product_id: 0,
          star_count: 0,
          heading: "",
          text: "",
          author: ''
        },

      },
      'quantity' : 1
    };

    this.UserLeaveReviewYet = this.UserLeaveReviewYet.bind(this);
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.hidePurchaseMessage = this.hidePurchaseMessage.bind(this);

  }


  componentDidMount() {

      this.props.requestSingleProduct(this.props.match.params.productId)
      .then(res => this.setState( res ));

      if(Object.keys(this.props.orders).length < 1){

        console.log('orders not found in store, loading orders')
        this.props.fetchOrders().then(res =>console.log(res));

      } else {

        console.log('orders found in store, no need to do an additional fetch')

      }
  }

  UserLeaveReviewYet(session_username){
    let keys = Object.keys(this.state.reviews);
    for(let i=0; i<keys.length; i++){

      if (this.state.reviews[keys[i]].author === session_username){
        return true
      }
    }
    return false
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {

      //reset reviews so if someone clicks on a new product, the old product's reviews dont carry over
      this.setState({
        'reviews' : {
          0 : { id: 0, product_id: 0, star_count: 0, heading: "", text: "", author: '' }
        }
      });

      //update state with the new product
      this.props.requestSingleProduct(this.props.match.params.productId).then(res => this.setState( res ));

    }
  }
  leaveReview(e){
    e.preventDefault();

  }

  handleClickAddToCart(e){

    e.preventDefault();

    let productCopy = this.state.product;
    productCopy.quantity = this.state.quantity;

    document.getElementById('modal-message').className = 'modal-message-show';
    this.props.receiveProductToCart(productCopy)

  }

  addQuantity(){
    this.setState({'quantity' : (this.state.quantity +1)})
  }

  subtractQuantity(){
    if(this.state.quantity === 1){
      return;
    }
    this.setState({'quantity' : (this.state.quantity -1)})
  }

  hidePurchaseMessage(e){
    e.preventDefault();
    document.getElementById('modal-message').className = 'modal-message-hide';
  }

  render() {
    const { session_username, session_id,
      selectedSingleProduct, receiveProductToCart, clearCart, loading } = this.props;

    const { product, reviews } = this.state;
    if (loading) {
      return <section ><LoadingIcon /></section>;
    }

    //determining if the user has purchased this item before(if yes:show button to leave review, if no, no button)
    let userPurchasedThisItem = (this.props.itemsPurchased).includes(this.props.match.params.productId.toString());

    let reviewLink;
    let userLeftAReview = this.UserLeaveReviewYet(session_username);

    //if the user has purchased item, show the appropriate new review form or edit review form
    if(userPurchasedThisItem){
       reviewLink = (userLeftAReview) ? <Link className="product-button review-link button" to="/api/editReview">Edit review</Link> : <Link className="product-button review-link button" to="/api/newReview">Leave A review</Link>;

    //if user hasnt purchased this item
    } else if (!userPurchasedThisItem){
      reviewLink =  "";
    }


    //rendering all the different reviews
    let reviewKeys = Object.keys(reviews);

    let reviewItems = reviewKeys.map(review => (
        <ReviewIndexItem key={`review-index-item-${reviews[review].id}`} review={reviews[review]}/>
      )
    );
    if(reviews[Object.keys(reviews)[0]].heading === ""){
      reviewItems = <h3>Be the first to leave a review</h3>;
    }

    let plural = (this.state.quantity >1) ? 's' : ''

    return (
      <>
      <section className="product-detail-container container">

        <img  src={product.image_url} alt={product.title} />
        <p>{starCount(Math.round(product.ave_review), product.id)} ({product.ave_review})</p>
        <h3>{product.name}</h3>
        <p><span className="product-details-bold" >Price:</span> ${product.price} </p>
        <p><span className="product-details-bold" >Category:</span> {product.product_type} </p>
        <p><span className="product-details-bold" >Description:</span><span className="product-details-description" > {product.description}</span></p>


        <button className="product-button-math button" onClick ={this.subtractQuantity}> - </button>
        <span id="product-quantity">{(this.state.quantity)}</span>
        <button className="product-button-math button" onClick ={this.addQuantity}> + </button>
        <br/>
        <button id="button-cart-call" className="product-button product-button-cart-call button" onClick ={this.handleClickAddToCart}> Add {(this.state.quantity)} Item{plural} To Cart </button>

        <div className="reviews-index">
          <h1>Reviews</h1>
          <span className="review-link-line">{reviewLink} {userPurchasedThisItem && !userLeftAReview ? "Leave a review and share your product feedback!": "" } </span >
          {reviewItems}
        </div>

        <div id='modal-message' className='modal-message-hide' onClick={this.hidePurchaseMessage}>
          <h1>You have successfully added {this.state.quantity} {this.state.product.name}{plural} to your Cart</h1>
          <Link className="modal-link" to="/cart">Go To Cart</Link>
          <Link className="modal-link" to="/api/products" >Continue Shopping</Link>
        </div>


      </section>
      </>
    );
  }
}

export default withRouter(ProductDetail);
