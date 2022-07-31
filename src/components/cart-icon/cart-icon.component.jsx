import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

export default function CartIcon() {
  const { setIsCartOpen, cartCount } = React.useContext(CartContext);
  const handleClick = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
