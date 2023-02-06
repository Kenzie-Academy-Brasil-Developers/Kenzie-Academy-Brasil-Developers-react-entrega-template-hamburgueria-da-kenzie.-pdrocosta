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
  img{
    border: var(--border-radius) ;
    border-color: var(--color-grey-2);
  }
`;
export default StyledUl;
