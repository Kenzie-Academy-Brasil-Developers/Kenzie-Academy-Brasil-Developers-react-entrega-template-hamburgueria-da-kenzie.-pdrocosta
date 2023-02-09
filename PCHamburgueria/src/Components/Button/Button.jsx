import StyledButton from "./styleButton.js";
import "react-toastify/dist/ReactToastify.css";

export const Button = ({ currentSale, setCurrentSale, product }) => {
  function addToCart() {
    const verifiedSale = currentSale.find((sale) => sale.id === product.id);
    verifiedSale !== undefined
      ? alert("Este produto ja esta no seu carrinho.")
      : setCurrentSale([...currentSale, product]);

  }

  return (
    <StyledButton>
      <button onClick={addToCart}>Adicionar</button>
    </StyledButton>
  );
};
