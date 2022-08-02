import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

// HELPER FUNCTION
const addCartItem = (cartItems, productToAdd) => {
  let newCart;
  const indexOfItem = cartItems.findIndex(
    (item) => item.id === productToAdd.id
  );
  // If found, increment qty
  if (indexOfItem >= 0) {
    ++cartItems[indexOfItem].quantity;
  } else {
    productToAdd.quantity = 1;
    cartItems.push(productToAdd);
  }
  // return new array with modified cartItems/new cart item
  newCart = [...cartItems];
  return newCart;
};

const removeCartItem = (cartItems, productToRemove) => {
  let newCart;
  const indexOfItem = cartItems.findIndex(
    (item) => item.id === productToRemove.id
  );
  if (cartItems[indexOfItem].quantity > 1) {
    --cartItems[indexOfItem].quantity;
  } else {
    cartItems.splice(indexOfItem, 1);
  }
  newCart = [...cartItems];
  return newCart;
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
