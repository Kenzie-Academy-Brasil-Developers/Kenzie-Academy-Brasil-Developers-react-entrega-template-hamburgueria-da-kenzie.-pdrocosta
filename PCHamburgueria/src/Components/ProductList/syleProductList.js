import styled from "styled-components";

const StyledUl = styled.ul`
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 40%;

  justify-content: space-between;
  span {
  }
  img {
    border: var(--border-radius);
    border-color: var(--color-grey-2);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 95%;

    height: 700px;
    overflow-x: auto;
    overflow-y: hidden;
    flex-flow: nowrap;
    margin: 1%;
  }
`;
export default StyledUl;
