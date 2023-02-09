import styled from "styled-components";

const StyledCart = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  margin: 0% 3% 0% 3%;
  color: black;
  overflow-y: hidden;
  height: 80vh;
  img {
    border-radius: var(--border-default);
    width: 30%;
  }
  .div_cart_empty {
    width: 100%;
    height: 70%;
  }
  footer {
    position: sticky;
    bottom: 0px;
    border-top: 3px var(--color-grey-2) solid;
    display: flex;
    background-color: var(--color-grey-4);
    width: 100%;
    border-bottom-left-radius: var(--border-default);
    border-bottom-right-radius: var(--border-default);
    height: 20%;
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
    height: 100px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3%;
    color: white;
    font-size: normal;
  }
  div {
    gap: 3%;
  }
  .div_container_cart {
    display: flex;
    flex-direction: column;

    border-top-left-radius: var(--border-default);
    border-top-right-radius: var(--border-default);
    max-height: 50%;
    width: 100%;
    height: 100px;

    background-color: var(--color-grey-4);
    color: black;
  }
  .ul_cart {
    height: 70%;
    overflow-y: auto;
    width: 100%;
    overflow-x: hidden;
    background-color: var(--color-grey-4);
  }
  .title_cart {
    background-color: var(--color-primary);
    height: 100px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3%;
    color: white;
    font-size:1.3rem;
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
    border: 2px var(--color-grey-4);
    border-radius: var(--border-default);
  }
  p {
    color: var(--color-grey-2);
  }
  .div_cart_empty_infos{
    background-color: var(--color-grey-3);
    height: 100px;
    padding: 4%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  @media (max-width: 900px){
    width: 90%;

.div_container_cart{
    height: 10%;
  }
  }
`;

export default StyledCart;
