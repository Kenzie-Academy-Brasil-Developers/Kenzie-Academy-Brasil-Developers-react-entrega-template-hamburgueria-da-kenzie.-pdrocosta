import StyledCartTotal from "./CartTotal";

export function CartTotal({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  let valorTotal = 0;

  if (currentSale.length > 0) {
    valorTotal = currentSale.reduce((valorAtual, sale) => {
      return valorAtual + Number(sale.price);
    }, valorTotal);
    setCartTotal(valorTotal.toFixed(2));
  }

  function clearCart() {}

  return (
    <StyledCartTotal>
      <div className="div_total_infos">
        <p>Total</p>
        <p>R${cartTotal}</p>
      </div>

      <button onClick={setCurrentSale([])}>Remover todos</button>
    </StyledCartTotal>
  );
}

export default CartTotal;
