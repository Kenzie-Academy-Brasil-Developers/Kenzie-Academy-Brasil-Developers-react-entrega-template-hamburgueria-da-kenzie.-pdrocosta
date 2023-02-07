import StyledButton from "../../Button/Button";
import StyledCartProduct from "./cartProduct.js";
import { useState, useEffect } from "react";

export const CartProduct = ({
  img,
  name,
  category,
  currentSale,
  setCurrentSale,
  price,
}) => {
  function removeProduct(name) {
    const removedProducts = currentSale.filter((sale) => sale.name !== name);
    setCurrentSale(removedProducts);
  }

  function counterPrice(price, multiplier) {
    console.log(price, multiplier);
    let finalPrice;
    finalPrice = Number(price.price) * Number(multiplier);
    console.log(finalPrice);
    return Number(finalPrice);
  }

  return (
    <StyledCartProduct>
      <img src={img} alt="" />
      <div className="div_infos">
        <h3>{name}</h3>
        <p>{category}</p>
        

        <input
          type="number"
          name="multiplier"
          id="multiplier"
          value="1"
          placeholder="Quantidade"
          onChange={(e) => counterPrice({ price }, Number(e.target.value))}
        />
      </div>

      <button type="submit" onClick={() => removeProduct(name)}>
        Remover
      </button>
    </StyledCartProduct>
  );
};
