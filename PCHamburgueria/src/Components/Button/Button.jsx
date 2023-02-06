import StyledButton from "./button.js";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const Button = ({ currentSale, setCurrentSale, product }) => {
  function addToCart(product) {
    const verifiedSale = currentSale.find((sale) => sale.id === product.id);
    verifiedSale
      ? toast("Este produto ja esta no seu carrinho.")
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
