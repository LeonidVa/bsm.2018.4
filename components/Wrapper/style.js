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
  .slick {
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    max-width: 100%;
  }
  .slick-next,
  .slick-prev {
    z-index: 2;
    @media (max-width: 370px) {
      transform: scale(3);
    }
    @media (max-width: 660px) {
      transform: scale(3.5);
    }
    @media (min-width: 661px) {
      transform: scale(4);
    }
    &:before {
      line-height: 1.2;
      color: #f05638;
      @media (max-width: 660px) {
        opacity: 1;
      }
    }
  }
  .slick-next {
    right: 5%;
  }
  .slick-prev {
    left: 5%;
  }
  @media (max-width: 660px) {
    .slick-next {
      right: 7%;
    }
    .slick-prev {
      left: 7%;
    }
  }
}
.DayPicker {
    display: inline-block;
}

.DayPicker-wrapper {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-bottom: 1rem;
    flex-direction: row;
}

.DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.DayPicker-Month {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0 1rem;
    margin-top: 1rem;
}

.DayPicker-NavBar {
}

.DayPicker-NavButton {
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 1.5rem;
    margin-top: 2px;
    color: #8b9898;
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
}

.DayPicker-NavButton:hover {
    opacity: 0.8;
}

.DayPicker-NavButton--prev {
    margin-right: 1.5rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
}

.DayPicker-NavButton--next {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
}

.DayPicker-NavButton--interactionDisabled {
    display: none;
}

.DayPicker-Caption {
    padding: 0 0.5rem;
    display: table-caption;
    text-align: left;
    margin-bottom: 0.5rem;
}

.DayPicker-Caption > div {
    font-size: 1.15rem;
    font-weight: 500;
}

.DayPicker-Weekdays {
    margin-top: 1rem;
    display: table-header-group;
}

.DayPicker-WeekdaysRow {
    display: table-row;
}

.DayPicker-Weekday {
    display: table-cell;
    padding: 0.5rem;
    font-size: 0.875em;
    text-align: center;
    color: #8b9898;
}

.DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
}

.DayPicker-Body {
    display: table-row-group;
}

.DayPicker-Week {
    display: table-row;
}

.DayPicker-Day {
    display: table-cell;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    border-radius: 50%;
}

.DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.5rem;
    text-align: right;
    vertical-align: middle;
    min-width: 1rem;
    font-size: 0.75em;
    cursor: pointer;
    color: #8b9898;
    border-right: 1px solid #eaecec;
}

.DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
}

.DayPicker-Footer {
    padding-top: 0.5rem;
}

.DayPicker-TodayButton {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    color: #4a90e2;
    font-size: 0.875em;
}

/* Default modifiers */

.DayPicker-Day--today {
    color: #d0021b;
    font-weight: 700;
}

.DayPicker-Day--outside {
    cursor: default;
    color: #8b9898;
}

.DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    /* background-color: #eff1f1; */
}

/* Example modifiers */

.DayPicker-Day--sunday {
    background-color: #f7f8f8;
}

.DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    color: #f0f8ff;
    background-color: #4a90e2;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #51a0fa;
}

.DayPicker:not(.DayPicker--interactionDisabled)
.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
}

/* DayPickerInput */

.DayPickerInput {
    display: block;
}

.DayPickerInput-OverlayWrapper {
    position: relative;
    font-size: 0.44em;
}

.DayPickerInput-Overlay {
    left: 0;
    z-index: 1;
    position: absolute;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.slick3 {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: space-between;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
}
.dropzone {
    div {
        border: none !important;
        text-decoration: underline;
        height: 40px !important;
        color: #f4511e;
        cursor: pointer;
        font-weight: 500;
    }
}
// Dropdown selector styles

.Dropdown-root {
    position: relative;
    font-size: .44em;
    height: 3.21em;
    background-color: #f5f5f5;
}
.Dropdown-control {
    position: relative;
    height: 3.20em;
    overflow: hidden;
    background-color: #f5f5f5;
    color: #666666;
    cursor: default;
    outline: none;
    padding: 14px 52px 16px 4px;
    transition: all 200ms ease;
    border: solid 0.5px #dadada;
    border-radius: 2px;
    box-sizing: border-box;
}
.Dropdown-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.Dropdown-arrow {
    border-color: #555555 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 18px;
    width: 0
}
.is-open .Dropdown-arrow {
    border-color: transparent transparent #999999;
    border-width: 0 5px 5px;
}
.Dropdown-menu {
    background-color: white;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
}
.Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    color: rgba(51, 51, 51, 1);
    font-weight: bold;
    text-transform: capitalize;
}
.Dropdown-option {
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    padding: 8px 10px;
}
.Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
}
.Dropdown-option:hover {
    background-color: #f2f9fc;
    color: #333333;
}
.Dropdown-option.is-selected {
    background-color: #f2f9fc;
    color: #333333;
}
.Dropdown-noresults {
    box-sizing: border-box;
    color: #cccccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
}
`;