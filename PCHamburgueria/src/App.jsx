import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GlobalStyle from "./styles/global.js";
import ListProducts from "./Components/ProductList/ProductList.jsx";
import Header from "./Components/Header/Header.jsx";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./Components/Cart/Cart.jsx";
import StyleSectionApp from "./styles/app";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);
  console.log(products);

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
            setFilteredProducts={setFilteredProducts}
          />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </main>
      </StyleSectionApp>
    </>
  );
}

export default App;
