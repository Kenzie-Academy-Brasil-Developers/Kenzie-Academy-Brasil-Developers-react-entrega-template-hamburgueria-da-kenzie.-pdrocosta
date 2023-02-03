import { useEffect } from "react";
import StyledCartTotal from "./CartTotal";

export function CartTotal({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  /*useEffect(
    {
      cartValue({ currentSale }) {
        const newSale = currentSale.map((product) => {
          console.log(product.price);
          let valorTotal = 0;
          return (valorTotal += product.price);
        });
        setCartTotal(newSale);
      },
    },
    [currentSale]
  );*/
  console.log(cartTotal);
  return (
    <>
      <p>{cartTotal}</p>
    </>
  );
}

export default CartTotal;
