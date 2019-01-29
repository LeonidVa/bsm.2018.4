import styled from 'styled-components'

export const BlockAccordionContacts = styled.div`
  padding: 0;
  background-color: #ffffff;
  color: #4a4a4a;
  position: relative;
  z-index: 0;
`;

export const BlockAccordionHeader = styled.div`
  padding: 0;
  position: relative;
  cursor: pointer;
  &:hover .block-accordion__title {
    color: #f4511e;
  }
`;

export const BlockTextPar = styled.p`
  transition: all .4s;
  &:hover {
    color: #f4511e;
  }
`;

export const BlockAccordionBody = styled.div`
  max-height: 0;
  padding: 0 2.18rem;
  transition: all .5s linear;
  td:last-child.single {
    text-align: left;
  }
  a {
    color: #4a4a4a;
    &:hover {
      color: #f4511e;
    }
  }
  a.none { text-decoration: none; }
  span.spacepricepage {
    padding-left: 309px;
    @media (max-width: 660px) {
      padding-left: 122px;
    }
  }
  span.strint {
    color: #4a4a4a;
    font-weight: 100;
    line-height: 147%;
    font-size: 99%;
    @media (max-width: 660px) {
      display: block;
      width: 70%;
    }
    @media (max-width: 361px) {
      display: block;
      width: 66%;
    }
    @media (max-width: 321px) {
      display: block;
      width: 54%;
    }
  }
`;