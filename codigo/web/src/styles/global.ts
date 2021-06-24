import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #333333;

    --caramel-100: #EDCEB3;
    --caramel-400: #E2A365;
    --caramel-800: #8F5B28;

    --blue-100: #98B5CC;
    --blue-500: #2A6089;
    --blue-800: #153D5B;

    --error-100: #F5C6CB;
    --error-700: #BF2503;

    --success-100: #D4EDDA;
    --success-700: #155724;

    --warning-100: #FFECCC;
    --warning-700: #FF9A00;

    --modal-background: rgba(0, 0, 0, 0.4);

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
