import styled from "styled-components";

export const Item = styled.a`
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-size: 2em;
  margin: 0 1em;
  padding: .94em 0;
  border-bottom: .5px solid #dadada;
  position: relative;
  @media (max-width: 660px) {
    margin: 0 .5em;
  }
  :last-child {
    border-bottom: none;
  }
  :hover .fas {
    right: -6px;
    color: #f4511e;
  }
  .title {
    color: #333333;
    font-weight: 500;
    margin-bottom: 3px;
    transition: all .25s;
  }
  :hover .title {
    color: #f4511e;
  }
  .subtitle {
    color: #9b9b9b;
    font-size: .5em;
  }
  .arrow {
    color: #f4511e;
    font-size: .700em;
    width: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.375em;
    transition: all .4s;
  }
`;


export const BlockNavWrapper = styled.div`
  font-size: 1em;
  width: 34em;
  margin: 1.56em auto 0;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    width: 70%;
    min-width: 273px;
  }
  @media (max-width: 660px) {
    width: 100%;
  }
`;