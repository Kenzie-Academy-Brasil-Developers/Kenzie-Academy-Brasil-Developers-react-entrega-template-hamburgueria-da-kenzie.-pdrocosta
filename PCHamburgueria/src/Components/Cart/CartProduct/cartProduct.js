import styled from "styled-components";

 const StyledCartProduct = styled.div`
width: 20%;
  display: flex;
  width: 48%;
  color: var(--color-grey-1);
  gap: 3%;
  padding: 3%;
  margin: 1%;
  border: var(--color-grey-2);
  border-radius: var(--border-default);
  align-items: center;
    justify-content: space-between;
    flex-direction: row;
  img {
    width: 70%;
    background-color: var(--color-grey-3);
  }
  button{
    background-color: var(--color-primary);
    
    padding: 6%;
    border: none;
    border-radius: var(--border-default);
    color: white;
  }
  .div_infos{
    display: flex;
    flex-direction: column;
    margin: 3%;
    padding: 3%;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  .div_infos>input{
    width: 30%;
    background-color: white;
    color: black;

  }
 `

export default StyledCartProduct;