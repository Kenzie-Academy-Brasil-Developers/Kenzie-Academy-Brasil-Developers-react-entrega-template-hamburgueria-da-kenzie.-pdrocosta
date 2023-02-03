import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{

  margin:0px;
  padding: 0px;
}
  body {
    margin: 0;
    min-width: 100%;
    min-height: 100%;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  
  };
    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --color-grey-1: #333333;
        --color-grey-2:#828282;
        --color-grey-3:#E0E0E0;
        --color-grey-4:#F5F5F5;
        --color-feedback-n : #E60000;
        --color-feedback-w : #FFCD07;
        --color-feedback-s : #168821;
        --color-feedback-i : #155BCB;
        font-family: 'Inter', sans-serif; 
        --border-default: 8px;
        --desktop-margin: 100px;
        --mobile-margin: 15px;
        --heading1: bold 26px;
        --heading2: bold 22px;
        --heading3: bold 18px;
        --heading4: bold 14px;
        --headline: 16px;
        --body: bold 14px;
        --body-600: bold 14px;
        
    
      }  
  
`;
export default GlobalStyle;
