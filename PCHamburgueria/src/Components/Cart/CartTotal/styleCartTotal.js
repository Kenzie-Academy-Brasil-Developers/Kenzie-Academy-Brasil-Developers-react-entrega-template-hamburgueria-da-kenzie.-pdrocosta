import styled from "styled-components";

const StyledCartTotal = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .div_total > p {
    color: var(--color-grey-5);
    font-size: larger;
  }
  .btn_remove_all {
    width: 100%;
    position: relative;

    padding: 1rem;
    color: var(--color-grey-2);
    background-color: var(--color-grey-3);
    border-radius: var(--border-default);
    margin-top: 5%;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .div_total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .total_p {
    color: black;
    font-style: bolder;
    font-size: 2rem;
    margin: 2%;
  }
  .total_num_p {
    font-size: 1rem;
    color: var(--color-grey-2);
    margin: 2%;
    font-style: bold;
  }
  @media (max-width:900px) {
     h2{
      font-size: .5rem;
     } 
  }
`;

export default StyledCartTotal;
