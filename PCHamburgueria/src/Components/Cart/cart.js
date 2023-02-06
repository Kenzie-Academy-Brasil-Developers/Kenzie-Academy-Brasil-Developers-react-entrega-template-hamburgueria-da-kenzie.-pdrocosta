import styled from "styled-components";

const StyledCart = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-height: 50%;
  padding: 0% 0% 2% 0%;
  height: 60vh;
  margin: 3%;
  border: 1px solid var(--color-grey2);
  border-radius: var(border-default);
  background-color: white;
  color: black;
  footer {
    position: sticky;
    bottom: 0px;
    margin-top: 3%;
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

    height: 30%;

    border: 1px solid var(--color-grey2);
    border-radius: var(border-default);
    background-color: white;
    color: black;
  }
  .ul_cart {
    height: 70%;
    overflow-y: auto;
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
    justify-content: space-between;}
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
    p{
color:var(--color-grey-2)    }
  
`;

export default StyledCart;
