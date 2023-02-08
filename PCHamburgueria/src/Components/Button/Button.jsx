import StyledButton from "./styleButton.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export const Button = ({ currentSale, setCurrentSale, product }) => {
  function addToCart() {
    const verifiedSale = currentSale.find((sale) => sale.id === product.id);
    verifiedSale !== undefined
      ? alert("Este produto ja esta no seu carrinho.")
      : setCurrentSale([...currentSale, product]);
    console.log(verifiedSale, product);
  }

  return (
    <StyledButton>
      <button onClick={addToCart}>Adicionar</button>
    </StyledButton>
  );
};
