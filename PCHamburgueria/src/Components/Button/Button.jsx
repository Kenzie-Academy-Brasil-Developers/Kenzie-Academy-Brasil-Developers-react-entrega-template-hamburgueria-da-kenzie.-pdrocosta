import StyledButton from "./button.js";

export const Button = ({ currentSale, setCurrentSale, product }) => {
  function addToCart(product) {
    const verifiedSale = currentSale.find((sale) => sale.id === product.id);
    verifiedSale
      ? console.log("nao")
      : setCurrentSale((prevState) => [...prevState, product]);
  }

  return (
    <StyledButton>
      <button type="submit" onClick={() => addToCart(product)}>
        Adicionar
      </button>
    </StyledButton>
  );
};
