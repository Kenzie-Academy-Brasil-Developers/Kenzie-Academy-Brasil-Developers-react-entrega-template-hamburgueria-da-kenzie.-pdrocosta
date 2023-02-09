import styled from "styled-components";

const StyledCartProduct = styled.div`
  height: 30%;
  display: flex;

  color: var(--color-grey-1);


  border-radius: var(--border-default);
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;

  img {
    width: 50%;
    background-color: var(--color-grey-3);
  }
  button {
    background-color: transparent;

    padding-right: 6%;
    padding-top: 2%;
    border: none;

    font-size: 1rem;
    color: var(--color-grey-3);
  }
  .div_infos {
    display: flex;
    flex-direction: column;

    padding: 3%;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 5%;
  }
  .div_infos > input {
    width: 30%;
    background-color: white;
    color: black;
    border: none;
  }
  h3 {
    margin-bottom: 20%;
  }
  p {
    margin-bottom: 5%;
    font-weight: 600;
    color: var(--color-grey-2);
  }
  @media (max-width: 900px){
    height: 10%;
  }

`;

export default StyledCartProduct;
