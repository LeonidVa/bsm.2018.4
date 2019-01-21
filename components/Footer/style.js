import styled from 'styled-components';

export const DivFooter = styled.div`
  font-size: 2em;
  padding: 1.56em 0 .625em;
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const DivInner = styled.div`
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 660px) {
    display: block;
  }
`;

export const DivFooterLogo = styled.div`
  width: 4.22em;
  margin-right: .5em;
  img {
    width: 100%;
  } 
  @media (max-width: 660px) {
    width: 2.22em;
    height: 2.22em;
    margin: 0 auto .5em;
  }
`; 

export const DivFooterCenter = styled.div`
  width: 21.75em;
  display: flex;
  align-items: center;
  margin-right: 10%;
  @media (max-width: 660px) {
    width: 100%;
    margin-bottom: .5em;
  }
`;

export const DivFooterNav = styled.div `
  width: 100%;
  display: block;
`;

export const UlFooter = styled.ul`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: Ubuntu,sans-serif;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 660px) {
    justify-content: space-around;
  }
`;

export const LiFooter = styled.li`
  margin: 0 auto;
  font-size: .438em;
  @media (max-width: 480px) {
    font-size: .3em;
  }
`;

export const AFooter = styled.a`
  list-style-type: none;
  color: #4a4a4a;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #4a4a4a;
    left: 50%;
    top: 100%;
    transition: all .4s;   
  }
  &:hover::after {
    left: 0;
    width: 100%;
  }
`;

export const PFooterCopyright = styled.p`
  font-size: .375em;
  color: #9b9b9b;
  text-align: center;
  line-height: normal;
  margin-top: -11px;
  @media (max-width: 660px) {
    margin-top: 0;
  }
`;

export const SpanFooter = styled.span`
  display: block;
`;

export const AFooterCopyright = styled.a`
  text-decoration: none;
  color: inherit;
`;