import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClick = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
