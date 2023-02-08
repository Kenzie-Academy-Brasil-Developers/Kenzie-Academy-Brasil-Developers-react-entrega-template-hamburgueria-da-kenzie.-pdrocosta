import styled from "styled-components";

const StyleSectionApp = styled.section`
  main {
    display: flex;
    padding: 3%;
    gap: 3%;
    flex-direction: row;
    max-height: 100vh;
    background-color: white;
  }
  @media (max-width: 900px) {
    main {
      flex-direction: column;
    }
  }
`;

export default StyleSectionApp;
