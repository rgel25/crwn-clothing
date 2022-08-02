import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleIncrement = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const handleClear = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
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
