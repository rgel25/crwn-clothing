import React from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

export default function Checkout() {
  const { cartItems, cartTotal } = React.useContext(CartContext);

  // const deleteFromCart = (e) => {
  //   cartItems.splice(e.target.dataset.index, 1);
  //   const newCart = cartItems.slice();
  //   setCartItems(newCart);
  // };
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
}
