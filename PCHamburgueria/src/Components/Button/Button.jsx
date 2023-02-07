import StyledButton from "./button.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export const Button = ({
  currentSale,
  setCurrentSale,
  product,
  cartTotal,
  setCartTotal,
}) => {
  function addToCart(product) {
    const verifiedSale = currentSale.find((sale) => sale.id === product.id);
    verifiedSale
      ? alert("Este produto ja esta no seu carrinho.")
      : setCurrentSale((prevState) => [...prevState, product]);
  }



  return (
    <StyledButton>
      <button
        
        onClick={() => {
          addToCart(product);
        }}
      >
        Adicionar
      </button>
    </StyledButton>
  );
};
