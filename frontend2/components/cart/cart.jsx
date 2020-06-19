import React from 'react';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.getSum = this.getSum.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  componentDidMount(){
    this.setState({cart: this.props.cart});

  }

  componentWillUnmount(){
    this.props.updateCart(this.state.cart);
  }


  createOrder(cart){

    let newOrder = {};
    newOrder.total_price = 0;
    newOrder.user_id = this.props.session_id;
    newOrder.status = 'pending';
    newOrder.products = {};

    let copyCart = cart;

    for(let i=0; i< copyCart.length; i++){
      newOrder.total_price += (copyCart[i].price * copyCart[i].quantity);

      let newProduct = {};
      newProduct.id = copyCart[i].id;
      newProduct.price = copyCart[i].price;
      newProduct.quantity = copyCart[i].quantity;
      newProduct.image_url = copyCart[i].image_url;
      newProduct.name = copyCart[i].name;

      newOrder.products[newProduct.id] = newProduct;

    }
    newOrder.products = JSON.stringify(newOrder.products);
    console.log(newOrder);
    return newOrder;
  }

  handleSubmit(e) {
    e.preventDefault();
    let newOrder = this.createOrder(this.state.cart);

    this.props.createOrder(newOrder).then(
      this.setState({cart: []})
    ).then(
      this.props.clearCart()
    )
    document.getElementById('modal-message').className = 'modal-message-show';

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  addQuantity(idx){

    let copyCart = this.state.cart;
    copyCart[idx].quantity = copyCart[idx].quantity +1;
    this.setState({ cart : copyCart});

  }

  subtractQuantity(idx){
    if(this.state.cart[idx].quantity > 1){
      let copyCart = this.state.cart;
      copyCart[idx].quantity = copyCart[idx].quantity -1;
      this.setState({ cart : copyCart});
    }
  }

  updateQuantity(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  getSum(){
    let totalSum = 0;
    for(let i=0; i< this.state.cart.length; i++){
      totalSum += (this.state.cart[i].price * this.state.cart[i].quantity);
    }
    return totalSum;
  }

  deleteItem(idx){
    let copyCart = this.state.cart;
    copyCart.splice(idx, 1);
    this.setState({ cart: copyCart })
  }

  hideMessage(e){
    e.preventDefault();
      console.log('click')
      document.getElementById('modal-message').className = 'modal-message-hide';
  }

  render() {
    const { session_username, redirectError, currentProduct, cart } = this.props;

    let cart_items = "";
    let totalSum = "";
    let form = "";

    if(this.state.cart === undefined){

      cart_items = <h3>There are no items in your cart</h3>;

    //if there are items in the cart generate li elements for them
    } else if(this.state.cart.length > 0){

      cart_items = this.state.cart.map((item,idx) =>
        <li className="cart-index-item" key={idx} >
          <img className="cart-item-small-img" src={item.image_url} alt={item.title} />
          <h4>{item.name}</h4>
          <h4>Quantity:{item.quantity}</h4>
          <h4>Update Quantity</h4>

          <button className="cart-buttons small-buttons" data={idx} onClick={this.subtractQuantity.bind(this, idx)}>-</button>
          <button className="cart-buttons small-buttons" data={idx} onClick={this.addQuantity.bind(this, idx)}>+</button>
          <button className="cart-buttons cart-button-delete" data={idx} onClick={this.deleteItem.bind(this, idx)}>Remove Item</button>
          <h4>Individual Price: ${item.price} x {item.quantity} = ${item.price * item.quantity} </h4>
        </li>

      )
      totalSum = <h3>Total Sum: ${this.getSum().toString()}</h3>
      form = (
              <form onSubmit={this.handleSubmit}>
                <button className="cart-buttons-checkout cart-buttons">Proceed to Checkout</button>
              </form>
             )

    } else {
      cart_items = <h3>There are no items in your cart</h3>;

    }

    return (
      <section className="cart-detail-container container">

        <div id='modal-message' className='modal-message-hide' onClick={this.hideMessage}>
          <h1>You have successfully placed Your Order! </h1>
          <Link className="modal-link" to="/yourOrders">
            <h1>View Order</h1>
          </Link>
        </div>

        <h1>Your Cart</h1>
        <ul className="cart-list">
          {cart_items}
        </ul>
        {totalSum}
        {form}

      </section>
    );
  }
}

export default withRouter(Cart);
