import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/roboto"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(240, 240, 240);
    font-family: "Roboto";
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);