import StyledHeader from "./style";

const Header = ({ setFilteredProducts, products }) => {
  function handleSearch(input) {
    const filter2 = products.filter((product) => {
      const nameToLower = product.name.toLowerCase();
      const inputToLower = input.toLowerCase();
      const filtered = nameToLower.includes(inputToLower);

      if (filtered) {
        return product;
      } else {
        return;
      }
    });

    setFilteredProducts(filter2);
  }

  return (
    <StyledHeader>
      <header className="headerPC">
        <h2>
          <span>Hamburgueria</span>PC
        </h2>
        <div className="div_header_input">
          <form action="submit">
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              placeholder="Digitar Pesquisa"
              onChange={(e) => {
                e.preventDefault();

                handleSearch(e.target.value);
              }}
            />
            <button id="btn_search" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </header>
    </StyledHeader>
  );
};
export default Header;
