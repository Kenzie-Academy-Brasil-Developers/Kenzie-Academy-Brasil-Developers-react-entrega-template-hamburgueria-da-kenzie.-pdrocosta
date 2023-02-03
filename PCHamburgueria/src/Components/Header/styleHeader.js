import styled from "styled-components";

const StyledHeader = styled.header`
  header {
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid black;
    height: 20%;

    display: flex;
    color: var(--color-grey-1);

    align-content: center;

    align-items: center;
    padding: 4%;
    justify-content: space-between;
  }
  span {
    color: var(--color-secondary);
  }
`;
export default StyledHeader;
