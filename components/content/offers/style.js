import styled from 'styled-components'

export const BlockFormTimer = styled.section`
  font-size: 2em;
  width: 30.94em;
  max-width: 100%;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: right top;
  padding: 3.56em 2.688em 3.25em;
  color: #ffffff;
  @media (max-width: 900px) {
    width: 100%;
    background-position-x: 85%;
  }
  @media (max-width: 660px) {
    font-size: 1.375em;
    padding: 1em 0.75em 1.56em;
    background-position-x: 72%;
  }
  @media (max-width: 660px) {
    display: inline-block;
  }
`;

export const BlockFormTitleH = styled.span`
  font-size: 1em;
  margin-bottom: .56em;
`;