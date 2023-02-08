import styled from "styled-components";

const StyledCartTotal = styled.div`
  width: 100%;
  height: 30%;
  padding: 5%;
  margin: 5%;
  .div_total_infos > p {
    color: black;
    font-size: larger;
  }
  .btn_remove_all {
    width: 100%;
    padding: 1rem;
    color: var(--color-grey-2);
    margin: 3%;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .div_total_infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 2%;
    padding: 2%;
  }
  .total {
    color: black;
    font-style: bolder;
    font-size: 2rem;
  }
  .total_num {
    font-size: 1rem;
    color: var(--color-grey-2);
  }
`;

export default StyledCartTotal;
