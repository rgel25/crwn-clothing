import React from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardName className="name">{name}</ProductCardName>
        <ProductCardPrice className="price">${price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
