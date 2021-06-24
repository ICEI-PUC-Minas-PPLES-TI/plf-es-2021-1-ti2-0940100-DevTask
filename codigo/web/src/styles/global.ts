import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFF;
    --background: #E5E5E5;
    --ipt-background: #EFF0F6;
    --line: #C6C8D7;
    --placeholder: #6E7191;
    --icon: #A0A3BD;
    --text: #14142B;
    --purple: #B600D8;
    --dark-purple: #8E00A8;
    --light-purple: #C922E8;
    --organge: #FF5C00;
    --dark-organge: #D44D00;
    --light-organge: #FF7E36;
    --yellow: #FF9F0A;
    --dark-yellow: #E88D00;
    --light-yellow: #FFAA26;
  }

  body {
    height: 100%;
    color: var(--black);
    background-color: var(--white);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
