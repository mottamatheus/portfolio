import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --bg: #111515;
    --text-primary: #eb3b5a;
    --bg-card: #c3ccde;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: var(--text-primary);
    background-color: var(--bg);
  }

`;
