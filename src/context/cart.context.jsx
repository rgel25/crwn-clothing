import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems
      .map((i) => i.quantity)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems
      .map((i) => i.quantity * i.price)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    setCartItems,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
