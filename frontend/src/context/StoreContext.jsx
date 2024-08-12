import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets"; // Adjust the path as necessary

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  // const getTotalCartAmount = () => {
  //   return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
  //     const item = food_list.find((product) => product._id === itemId);
  //     if (item) {
  //       return total + item.price * quantity;
  //     }
  //     return total;
  //   }, 0);
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    Object.keys(cartItems).forEach((itemId) => {
      if (cartItems[itemId] > 0) {
        const item = food_list.find((product) => product._id === itemId);
        if (item) {
          totalAmount += item.price * cartItems[itemId];
        }
      }
    });
    return totalAmount;
  };


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
