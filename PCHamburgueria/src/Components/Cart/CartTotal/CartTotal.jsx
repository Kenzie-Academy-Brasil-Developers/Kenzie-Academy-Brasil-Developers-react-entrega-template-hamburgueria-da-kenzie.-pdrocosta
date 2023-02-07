import StyledCartTotal from "./CartTotal";
import { useState, useEffect } from "react";

export function CartTotal({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  const total = currentSale
    ? currentSale.reduce((valorAtual, sale) => {
        return valorAtual + Number(sale.price);
      }, 0)
    : 0;
  console.log(total, currentSale);

  return (
    <StyledCartTotal>
      <div className="div_total_infos">
        <p className="total">Total</p>
        <p className="total_num">R${(total).toFixed(2)}</p>
      </div>

      <button
        className="btn_remove_all"
        onClick={() => {
          setCartTotal(0);
          setCurrentSale([]);
        }}
      >
        Remover todos
      </button>
    </StyledCartTotal>
  );
}

export default CartTotal;

/* useEffect(() => {
    if (currentSale.length > 0) {
      let valorTotal = 0;
      console.log(currentSale, cartTotal);

      valorTotal = currentSale.reduce((valorAtual, sale) => {
        return valorAtual + Number(sale.price);
      }, valorTotal);
      setCartTotal(valorTotal.toFixed(2));
    }
  }, [currentSale]); */
