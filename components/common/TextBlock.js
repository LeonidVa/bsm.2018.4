import React, {Component} from 'react';

import styled from "styled-components"

const BlockText = styled.div`
  font-size: 1rem;
  width: 34em;
  margin: 3rem auto 0;
  background-color: #ffffff;
  padding: 3rem 2.5rem;
  color: #4a4a4a;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  a {
    text-decoration: none;
    @media (max-width: 660px) {
      text-decoration: underline;
    }
    color: #4a4a4a;
    transition: all .4s;
    &:hover {
      color: #f4511e;
    }
  }
  b {
    font-weight: 700;
  }
  @media (max-width: 900px) {
    width: 70%;
    min-width: 273px;
  }
  @media (max-width: 660px) {
    width: 100%;
    padding: 1rem;
  }
  .no-bottom-padd {
    padding-bottom: 0;
  }
  .title {
    font-size: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-weight: bold;
    line-height: 1.19;
    color: #4a4a4a;
    margin-top: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 660px) {
      font-size: 1.5rem;
    }
    :first-child {
        margin-top: 0;
    }
    .header {
      font-size: 2rem;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      font-weight: bold;
      line-height: 1.19;
      color: #4a4a4a;
      margin-top: 3rem;
      margin-bottom: 1rem;
      @media (max-width: 660px) {
        font-size: 1.5rem;
      }
    }
    .center {
      text-align: center;
    }
  }
  .subtitle {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.2;
    color: #4a4a4a;
    .subtitle-orange {
      color: #f4511e;
      margin-bottom: .625rem;
      span {
        margin-right: 3rem;
        display: inline-block;
      }
    }
    .subtitle-orange__micro{
      color: #f4511e;
      margin-bottom: .625rem;
    }
    .subtitle-big {
      font-size: .687rem;
      line-height: 1;
    }
  }
  img {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .par {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    color: #4a4a4a;
    margin-top: 1rem;
    @media (max-width: 415px) {
      width: 102%;
    }
    @media (max-width: 376px) {
      font-size: 106%;
    }
    @media (max-width: 361px) {
      width: 100%;
    }
      @media (max-width: 321px) {
        width: 102%;
        line-height: 144%;
      }
    .italic {
      font-style: italic;
    }
    .bold {
      font-weight: 700;
    }
    .big-bold {
      font-weight: 700;
    }
    .finish-text {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1.56em;
    }
    .right {
      text-align: right;
    }
    .center {
      text-align: center;
      @media (max-width: 321px) {
        text-align: center;
        padding-top: 4%;
      }
    }
    span.tel1 {
      white-space: nowrap;
    }
  }
  ul, ol {
    list-style-type: disc;
    padding: 0 0 0 0.8rem;
    .fitted {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .style-none {
      list-style: none;
      ul, ol {
        list-style: none;
        margin-top: 0.5rem;
      }
    }
    li {
      color: #4a4a4a;
      line-height: 1.5em;
      margin-bottom: 0.8em;
      .tel {
        white-space: nowrap;
      }
      li:last-child {
        margin-bottom: unset;
      }
      ul, ol {
        list-style-type: disc;
      }
      p {
        margin-bottom: 1em;
        line-height: 1.5;
        color: #4a4a4a;
      }
    }
    .block-text__list2 {
      li {
        line-height: 1.5;
        margin-bottom: 1.25em;
      }
    }
  }
  ul.block-text__links-list {
    padding-bottom: unset;
    @media (max-width: 660px) {
      list-style-type: none;
    }
    li:last-child {
      margin-bottom: unset;
    }
  }
  ol {
    list-style-type: decimal;
  }
  table {
    color: #4a4a4a;
    th {
      width: 50%;
      font-weight: bold;
      text-align: left;
      padding-bottom: 1.55em;
      &:last-child {
        text-align: right;
      }
    }
    td {
      width: 50%;
      text-align: left;
      padding-bottom: 1.875em;
      &:last-child {
        text-align: right;
      }
    }
  }
`;

class TextBlock extends Component{
    render() {
        return (<BlockText>{this.props.children}</BlockText>);
    }
}

export default TextBlock