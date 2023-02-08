import { Card } from "./Card/Card.jsx";
import StyledUl from "./syleProductList.js";

const ListProducts = ({
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <StyledUl>
      {filteredProducts.length > 0
        ? filteredProducts.map((product, index) => {
            return (
              <Card
                product={product}
                key={product.id}
                index={index}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            );
          })
        : products.map((product, index) => {
            return (
              <Card
                product={product}
                key={product.id}
                index={index}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            );
          })}
    </StyledUl>
  );
};

export default ListProducts;
