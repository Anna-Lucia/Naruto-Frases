import { createGlobalStyle } from 'styled-components';
import bg from '../../images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bg}) center no-repeat;  
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;