import styled from 'styled-components'

export const TitleDiv = styled.div`
  width: 100%;
  max-width: 34rem;
  @media (max-width: 900px) {
    width: 70%;
    max-width: none;
  }
  @media (max-width: 660px) {
    width: 100%;
    padding: 0 0.675rem;
  }
  h1 {
    color: #ffffff;
    font-size: 2rem;
    position: relative;
    z-index: 1;
    font-weight: 500;
    @media (max-width: 660px) {
      font-size: 1.375rem;
    }
  }
`;