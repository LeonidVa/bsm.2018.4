import styled from 'styled-components'

export const CallAskSection = styled.section`
  font-size: 2em;
  width: 100%;
  background-color: #ffffff;
  padding: 1.56em 0;
  margin-top: 1.56em;
  position: relative;
  z-index: 1;
`;  

export const Inner = styled.div`
  width: 14.88em;
  margin: 0 auto; 
  @media (max-width: 660px) {
    width: calc(100% - 30px);
    max-width: none;
 }
`;

export const Title = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 1em;
  color: #4a4a4a;
  margin-bottom: .94em;
  line-height: 0.4;
  @media (max-width: 660px) {
    font-size: 95%;
  }
`;

export const Buttons = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.a`
  font-size: 1.2rem;
  width: 14rem;
  display: block;
  color: #ffffff !important; /* blockText a перебивает! */
  text-decoration: none;
  background-color: #f4511e;
  padding: .91em 0;
  text-align: center;
  transition: all .4s;
  &:hover {
    background-color: #922d0e;
  }
  @media (max-width: 660px) {
    width: 15.33em;
    margin-bottom: 10px;
  } 
`;