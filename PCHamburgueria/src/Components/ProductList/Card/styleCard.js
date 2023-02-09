import styled from "styled-components";

const StyledLi = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  color: var(--color-grey-1);
  font-size: var(--body);
  align-items: flex-start;
  gap: 5%;
  border: 2px solid var(--color-grey-3);
  border-radius: var(--border-default);

  margin: 1%;
  .div_img {
    width: 100%;
    background-color: var(--color-grey-4);
    display: flex;
    justify-content: center;
    position: relative;
    height: 40%;
    img {
      position: relative;
      top: 0px;
      height: 200px;
    }
  }

  .div_infos {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  }
  .div_text {
    height: 60%;
    margin: 2%;
    p {
      padding: 3%;
      margin: 2%;
      width: 100%;
      color: var(--color-primary);
      font-style: italic;
    }
    h2 {
      padding: 3%;
      margin: 2%;
      width: 100%;
    }
    h4 {
      color: var(--color-grey-2);
      font-size: 8px;
      padding: 3%;
      margin: 2%;
      width: 100%;
    }
  }
  .div_content {
    border: 4px var(--color-grey-1);
    border-radius: var(--border-default);
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 95%;

  }
  .div_infos {
    width: 100%;
    padding-bottom: 2%;
  }
  .div_content {
    width: 100%;
  }
`;
export default StyledLi;
