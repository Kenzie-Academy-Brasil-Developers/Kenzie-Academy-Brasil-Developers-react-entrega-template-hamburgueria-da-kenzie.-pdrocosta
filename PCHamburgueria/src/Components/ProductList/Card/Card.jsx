import { Button } from "../../Button/Button.jsx";
import StyledLi from "./styleCard";

export const Card = ({ product, currentSale, setCurrentSale }) => {
  return (
    <StyledLi key={product.id}>
      <div className="div_content">
        <div className="div_infos">
          <div className="div_img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="div_text">
            <h2>{product.name}</h2>
            <h4>{product.category}</h4>
            <p>R${product.price.toFixed(2)}</p>
          </div>
          <Button
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </div>
    </StyledLi>
  );
};
