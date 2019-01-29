import styled from 'styled-components'

export const BreadcrumbsWrapper = styled.div `
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
`;