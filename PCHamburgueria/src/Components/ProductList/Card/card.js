import styled from "styled-components";

const StyledLi = styled.li`
  width: 20%;
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
  img {
    width: 100%;
    background-color: var(--color-grey-4);
  }
  h4{
    margin: 2%;
    color: var( --color-grey-2);
    font-size: 8px;
  }
  .div_content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

`;
export default StyledLi;
