import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

export const shopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach(function (key, index, arr) {
      if (cartItems[key] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(key)
        );
        totalAmount += itemInfo.new_price * cartItems[key];
      }
    });
    return totalAmount;

    // for (const item in cartItems) {
    //   console.log(cartItems[item], 'cart items', cartItems);
    //   if (cartItems[item] > 0) {
    //     let itemInfo = all_product.find(
    //       (product) => product.id === Number(item)
    //     );
    //     totalAmount += itemInfo.new_price * cartItems[item];
    //   }
    //   return totalAmount;
    // }
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartItems,
    getTotalAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ShopContextProvider;
