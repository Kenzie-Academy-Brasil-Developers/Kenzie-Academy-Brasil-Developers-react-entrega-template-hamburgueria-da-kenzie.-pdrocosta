import styled from "styled-components";

const StyledCartTotal = styled.div`
  width: 100%;
  height: 30%;
  padding: 5%;
  .div_total_infos>p {
    color: black;
    font-size: larger;
  }
  button {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
  }
  .div_total_infos
     {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      margin: 2%;
      padding: 2%;
    }
  
`;

export default StyledCartTotal;
