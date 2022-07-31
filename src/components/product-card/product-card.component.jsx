import React from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = React.useContext(CartContext);

  const handleClick = () => {
    addItemToCart(product);
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
