import { CartProduct } from "./CartProduct/CartProduct.jsx";
import { CartTotal } from "./CartTotal/CartTotal.jsx";
import StyledCart from "./cart";

const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal, filteredProducts, setFilteredProducts}) => {
  console.log(currentSale);
  return currentSale.length ? (
    <StyledCart>
      <div className="div_container_cart">
        <h2 className="title_cart">Carrinho de compras</h2>
      </div>
      <ul className="ul_cart">
        {currentSale.map((curr) => {
          return (
            <li key={curr.id} className="li_sale">
              <CartProduct
                img={curr.img}
                name={curr.name}
                category={curr.category}
                setCurrentSale={setCurrentSale}
                currentSale={currentSale}
                value={curr.price}
                price={curr.price}
              />
            </li>
          );
        })}
      </ul>
      <footer>
      <div>
        <p>Total</p>
      </div>
      <button>Remover todos</button>
      <CartTotal
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      </footer>
      
    </StyledCart>
  ) : (
    <>
      <StyledCart>
        <h2>Carrinho de compras</h2>

        <div>
          <h5>Sua sacola esta vazia</h5>
          <p>Adicione itens</p>
        </div>
      </StyledCart>
    </>
  );
};
export default Cart;
