import { createGlobalStyle }  from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, #form-sale center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    @media (min-width: 661px) and (max-width: 800px) {
      font-size: 12px;
    }
    @media (min-width: 801px) and (max-width: 1000px) {
      font-size: 14px;
    }
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: rgb(74,74,74);
    line-height: 1.3;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: none;
  }
  *::before, *::after {
    box-sizing: border-box;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .inner {
   
    max-width: 990px;
    margin: 0 auto;
    @media (max-width: 900px) {
      width: calc(100% - 30px);
      max-width: none;
    }
  }
  ul {
    list-style: none;
  }
  span.black {
    color: #191919;
    font-weight: 500;
    font-size: 2rem;
    font-family: "Ubuntu", sans-serif;
  }
  input {
    display: block;
    font-size: .44em;
    width: 100%;
    height: 3.21em;
    padding: 0 .31em;
    border-radius: 2px;
    background-color: #f5f5f5;
    border: solid 0.5px #dadada;
    &:focus {
        border: 1px solid #f4511e;
    }
  }
  .bg-img1, .bg-img2, .bg-img3, .bg-c2, .bg-c3 {
    .breadcrumbs {
      a, span { color: #333333; }
    }
  }
  .bg-img4, .bg-img5, .bg-c1 {
    .breadcrumbs {
      a, span { color: #f5f5f5; }
    }
  }
  .breadcrumbs {
    font-size: 2em;
    position: relative;
    z-index: 1;
    .inner {
      width: 100%;
      max-width: 17em;
      @media (max-width: 900px) {
        width: 70%;
        min-width: 273px;
        max-width: none;
      }
      @media (max-width: 660px) {
        width: 100%;
        padding: 0 10px;
      }
    }
    a, span {
      font-size: .5em;
      color: #333333;
      text-decoration: none;
    }
  }
`;