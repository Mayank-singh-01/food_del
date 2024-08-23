import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { food_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("");

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

  useEffect(()=>{
    if (localStorage.getItem("token")) {
       setToken(localStorage.getItem("token"));
    }
  },[])


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
