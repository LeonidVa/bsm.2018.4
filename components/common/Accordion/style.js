import styled from 'styled-components'


export const BlockAccordionTable = styled.table`
  width: 100%;
`;

export const SectionBlockAccordion = styled.section `
  width: 34em;
  margin: 3rem auto 0;
  padding: 0px;
  background-color: #ffffff;
  color: #4a4a4a;
  position: relative;
  z-index: 0;
`;

export const BlockAccordionHeader = styled.div`
  position: relative;
  cursor: pointer;
  padding: 3em 2em 2em;
`;

export const BlockAccordionTitle = styled.h2`
  font-size: 1.9rem;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-weight: bold;
  line-height: 1.19;
  color: #4a4a4a;
  transition: all .4s;
  width: 90%;
  @media (max-width: 415px) {
    font-size: 139%;
  }
  @media (max-width: 376px) {
    font-size: 117%;
  }
  @media (max-width: 361px) {
    font-size: 120%;
  }
  @media (max-width: 321px) {
    font-size: 97%;
  }
  &:hover {
    color: #f4511e;
  }
`;

export const BlockAccordionBody = styled.div`
  max-height: 0;
  padding: 0px 2.18rem;
  transition: all .5s linear;
`;

export const BlockTextPar = styled.p `
  transition: all .4s;
  &:hover {
    color: #f4511e;
  }
`;

export const BigBtn = styled.a `
  display: block;
  width: calc(100% + 4.36rem);
  text-align: center;
  font-size: 2rem;
  padding: 2.36rem 0;
  color: #ffffff;
  text-decoration: none;
  margin: 3.12rem 0 0 -2.18rem;
  background-color: #f4511e;
  transition: all .4s;
  @media (max-width: 415px) {
    width: 87%;
    min-width: 273px;
  }
  @media (max-width: 400px) {
    width: 79%;
    min-width: 273px;
  }
  @media (max-width: 321px) {
    width: 68%;
  }
  &:hover {
    background-color: #922d0e;
  }
`;

export const BlockAccordionArrow = styled.div`
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
  border: solid 0.125rem #f4511e;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  margin-top: -0.875rem;
  right: 2rem;
  @media (max-width: 415px) {
    right: 28%;
  }
  @media (max-width: 376px) {
    right: 36%;
  }
  @media (max-width: 321px) {
    right: 44%;
  }
  div {
    font-size: 2rem;
    width: 0.625rem;
    height: 0.625rem;
    border-right: 0.125rem solid #f4511e;
    border-bottom: 0.125rem solid #f4511e;
    transform: ${props => props.isOpen ? "rotate(225deg)" :  "rotate(45deg)"};
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.375rem;
    margin-top: ${props => props.isOpen ? "-0.18rem" :  "-0.375rem"};
    margin-left: -0.31rem;
    transition: all 0.4s ease-out;
  }
`;

export const TableTh = styled.th`
  font-size: 1.125em;
  font-weight: 700;
  &:last-child{
    text-align: right;
  }
`;

export const SingleTd = styled.td`
  color: #4a4a4a;
  font-weight: 100;
  line-height: 147%;
  font-size: 99%;
  padding-bottom: .875em;

`;

export const StyleTd = styled.td`
  width: 60%;
  text-align:left;
  padding-bottom: .875em;
  &:last-child{
    text-align: right;
  }
  a{
    color: #4a4a4a;
  }
`;