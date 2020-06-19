import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <hgroup className="header-group">
      <Link to="/" className="header-left">
      <span id="header-icon"></span><h2>Beach Shop</h2>
      </Link>
      <div id="header-right-landing" className="header-right">
        <Link className="header-link" to="/Login">Login</Link>
        <Link className="header-link" to="/signup" >Sign Up</Link>

      </div>
    </hgroup>


  );
  const personalGreeting = () => (
    <hgroup className="header-group">

      <Link to="/" className="header-left">
        <span id="header-icon"></span><h2>Beach Shop</h2>
      </Link>
      <div className="header-right">
        <Link className="header-link" to="/api/products">Shop</Link>
        <Link className="header-link" to="/cart" >Cart</Link>
        <Link className="header-link" to="/yourOrders">Your Orders</Link>


        <span className="header-name">Hi {currentUser.username}!</span>
        <span className="avatar">
          <Link to={`/api/profile`}>
            <img className="avatar-img" src={currentUser.avatar_url} alt={currentUser.username} />
          </Link>
        </span>

        <button className="header-logout-button" onClick={logout}>Log Out</button>

      </div>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
