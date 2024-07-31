import { useReducer, useState, } from "react";
import CartReducer from './CartReducer'
import CartContext from "./CartContext";

const CartContextState = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, [])



  const info = { state, dispatch }


  return <CartContext.Provider value={info}>{children}</CartContext.Provider>
}

export default CartContextState