import { Button } from "../../Button/Button.jsx";
import StyledLi from "./Card.js";

export const Card = ({ product, currentSale, setCurrentSale }) => {
  return (
    <StyledLi key={product.id}>
      <div className="div_content">
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <h4>{product.category}</h4>
        <p>R${product.price}</p>
      </div>

      <Button
        product={product}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
    </StyledLi>
  );
};

/* function render() {
  //onClick={handleClick(productId = {id})}
  // categoria, nome e preco.
  <Button />;
}
export function verifyCartProduct() {
  // utilizar toast para alertar usuario que item ja foi adicionado
  // React-toastify
}*/
