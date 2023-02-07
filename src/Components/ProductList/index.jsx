import { Card } from "./Card";
import StyledUl from "./style";

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
