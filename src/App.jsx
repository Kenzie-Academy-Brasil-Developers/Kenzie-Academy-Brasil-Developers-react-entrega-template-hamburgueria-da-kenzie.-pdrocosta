import { useState, useEffect } from "react";

import GlobalStyle from "./styles/global.js";
import ListProducts from "./Components/ProductList";
import Header from "./Components/Header";
import { api } from "./services/api";
import Cart from "./Components/Cart";
import StyleSectionApp from "./styles/app";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filter, setFilter] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {}
    }
    loadProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
        setProducts={setProducts}
        filter={filter}
        setFilter={setFilter}
      />
      <StyleSectionApp>
        <main>
          <ListProducts
            setCurrentSale={setCurrentSale}
            products={products}
            setProducts={setProducts}
            currentSale={currentSale}
            filteredProducts={filteredProducts}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </main>
      </StyleSectionApp>
    </>
  );
}

export default App;
