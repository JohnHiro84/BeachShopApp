import React from 'react';

import { withRouter} from 'react-router-dom';
import { dateFormatter } from '../../util/date_util';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: {}
    }

  }

  componentDidMount(){

    if(Object.keys(this.props.orders).length < 1){

      console.log('order.jsx - orders not found in store, loading orders')
      this.props.fetchOrders().then(data => this.setState({orders: data.orders}));

    } else {

      console.log('order.jsx - orders found in store, no need to do an additional fetch, still need to update state')
      this.setState({orders: this.props.orders});
    }
  }

  render() {

    const { orders} = this.state;

    //////////////////////////////////////////////////rendering the orders
    let orderKeys = ""
    let order_items = '';

    if(Object.keys(orders).length > 0){

      orderKeys = Object.keys(orders).reverse();
      order_items = [];

      for(let i= 0; i< orderKeys.length; i++){

        let uniqueKey = orderKeys[i];
        let formattedDate = dateFormatter(orders[uniqueKey].created_at);

        order_items.push(
          <li className="order-item" key={i.toString()}>
            <h3><span className="order-item-bold-heading">Order Number:</span> {orders[uniqueKey].id }</h3>
            <h3><span className="order-item-bold-heading"> {formattedDate }</span></h3>
            <h3><span className="order-item-bold-heading">Total Price:</span> ${orders[uniqueKey].total_price }</h3>
            <h3><span className="order-item-bold-heading">Status:</span> <span className="order-status">{orders[uniqueKey].status }</span></h3>
          </li>
        )

        let products = JSON.parse(orders[uniqueKey].products);
        let prod_keys = Object.keys(products)

        for(let j = 0; j< prod_keys.length; j++){

          let nodeKey = Math.floor(Math.random()*100000);
          let uniqueKey = prod_keys[j];

          order_items.push(
            <img  key={nodeKey} src={products[uniqueKey].image_url} className="cart-item-small-img" alt={products[uniqueKey].name} />
          );
          order_items.push(
            <p key={nodeKey+1}>{products[uniqueKey].quantity + " "}
              {products[uniqueKey].name}
              <span className="order-small-price">
                ${products[uniqueKey].price}/unit
              </span>
            </p>
          )
        }
    }
  }

  let products;


    return (
      <section className="orders">
        <h1>Your Orders</h1>
        <ul className="order-list">
        {order_items}
        </ul>

      </section>
    );
  }
}

export default withRouter(Order);
