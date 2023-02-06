import styled from "styled-components";

const StyledHeader = styled.header`
  header {
    box-sizing: border-box;
    padding: 20px;
    
    height: 20%;
    display: flex;
    color: var(--color-grey-1);
    background-color: var( --color-grey-4);
    align-content: center;

    align-items: center;
    padding: 4%;
    justify-content: space-between;
  }
  span {
    color: var(--color-secondary);
    font-size: bold;
  }
  .div_header_input{
display: flex;
width: 30%;
border-radius: var(--border-default); border: 2px solid var();
  }
  #btn_search{
    background-color: var(--color-primary);
    font-size: 16px;
    padding: 6%;
    border: none;
    border-radius: var(--border-default);
    color: white;
    margin: 2%;
  }
  form{
    display: flex;
  }
  #inputSearch{
background-color:transparent;
color: var(  --color-grey-2); border: none; }

`;
export default StyledHeader;
