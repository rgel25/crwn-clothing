import React from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  console.log(cartItem);
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    React.useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const handleDecrement = () => {
    removeItemFromCart(cartItem);
  };

  const handleIncrement = () => {
    addItemToCart(cartItem);
  };

  const handleClear = () => {
    clearItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrement}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="'remove-button" onClick={handleClear}>
        &#10005;
      </div>
    </div>
  );
}
