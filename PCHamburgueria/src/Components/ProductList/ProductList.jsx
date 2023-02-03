import { Card } from "./Card/Card.jsx";
import StyledUl from "./ProductList.js";

const ListProducts = ({
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
  setFilteredProducts,
}) => {
  console.log(filteredProducts);
  return (
    <StyledUl>
      {filteredProducts?.length > 0
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
              />
            );
          })}
    </StyledUl>
  );
};

export default ListProducts;
