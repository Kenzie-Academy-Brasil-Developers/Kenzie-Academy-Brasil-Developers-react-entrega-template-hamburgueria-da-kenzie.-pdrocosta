import StyledCartTotal from "./styleCartTotal";

export function CartTotal({
  currentSale,
  setCurrentSale,

  setCartTotal,
}) {
  const total = currentSale
    ? currentSale.reduce((valorAtual, sale) => {
        return valorAtual + Number(sale.price);
      }, 0)
    : 0;


  return (
    <StyledCartTotal>
      <div className="div_total">
        <p className="total_p">Total</p>
        <p className="total_num_p">R${total.toFixed(2)}</p>
      </div>

      <button
        className="btn_remove_all"
        onClick={() => {
          setCartTotal(0);
          setCurrentSale([]);
        }}
      >
        Remover todos
      </button>
    </StyledCartTotal>
  );
}

export default CartTotal;
