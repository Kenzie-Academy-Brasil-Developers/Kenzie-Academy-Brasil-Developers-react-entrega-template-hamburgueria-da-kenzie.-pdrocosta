import styled from "styled-components";

const StyledCart = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-height: 50%;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  height: 60vh;
  margin: 0% 3% 0% 3%;
  border: 1px solid var(--color-grey2);
  border-radius: var(border-default);
  background-color: white;
  color: black;
  overflow-x: hidden;
  .div_cart_empty {
    width: 100%;
    height: 70%;
  }
  footer {
    position: sticky;
    bottom: 0px;
    margin-top: 3%;
    padding: 3%;
    display: flex;
    width: 100%;
    div {
      width: 100%;
    }
  }
  ul {
    height: 70%;
    overflow-y: auto;
  }
  h2 {
    background-color: var(--color-primary);
    height: 20%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3%;
    color: white;
    font-size: var(--body);
  }
  div {
    gap: 3%;
  }
  .div_container_cart {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    max-height: 50%;
    width: 100%;
    height: 30%;

    border: 1px solid var(--color-grey2);
    border-radius: var(border-default);
    background-color: white;
    color: black;
  }
  .ul_cart {
    height: 70%;
    overflow-y: auto;
    width: 100%;
  }
  .title_cart {
    background-color: var(--color-primary);
    height: 80%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3%;
    color: white;
    font-size: var(--body);
    align-items: center;
    justify-content: space-between;
  }
  .li_sale {
    display: flex;
    flex-direction: column;
    color: var(--color-grey-1);
    font-size: var(--body);
    align-items: flex-start;
    gap: 5%;
    padding: 3%;
    margin: 1%;
    border: 2px var(--color-grey-3);
    border-radius: var(--border-default);
  }
  p {
    color: var(--color-grey-2);
  }
`;

export default StyledCart;
