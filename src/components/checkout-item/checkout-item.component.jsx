import React from "react";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

export default function CheckoutItem({ cartItem }) {
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleDecrement}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncrement}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
