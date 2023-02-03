import StyledHeader from "./styleHeader";

const Header = ({
  setFilteredProducts,
  products,
  setProducts,
  filteredProducts,
  filter,
  setFilter,
}) => {
  function handleSearch(input) {
    const filter2 = products.filter((product) => {
      const nameToLower = product.name.toLowerCase();
      const inputToLower = input.toLowerCase();
      const filtered = nameToLower.includes(inputToLower);
      console.log(filtered);
      if (filtered) {
        return product;
      } else {
        return;
      }
    });
    console.log(filter2);
    setFilteredProducts(filter2);
  }
  console.log(filteredProducts);
  return (
    <StyledHeader>
      <>
        <header className="headerPC">
          <h2>
            <span>Burguer</span>PC
          </h2>
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
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Pesquisar
            </button>
          </form>
        </header>
      </>
    </StyledHeader>
  );
};
export default Header;
