import styled from 'styled-components'

export const Input = styled.input`
  margin-right: ${props => props.inputmarginright || ""};
  font-size: ${props => props.inputfontsize || ".469em"};
  width: ${props => props.inputwidth || "14.73em"};
  height: 3em;
  padding: 0 .67em;
  color: #4a4a4a;
  border: none;
  &:focus {
    border: 1px solid #f4511e;
  }
  @media (max-width: 660px) {
    padding: 0 .33em;
    font-size: 0.75em;
    width: 12rem;
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  font-size: .56em;
  width: 12.28em;
  height: 2.78em;
  color: #fff;
  border: none;
  background-color: #f4511e;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    background-color: #922d0e;
  }
  @media (max-width: 660px) {
    font-size: 0.75em;
    height: 3rem;
    width: 12rem;
  }     
`;

export const FormSubmit = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
font-size: ${props => props.formfontsize || "2em"};
width: 14.9em;
@media (max-width: 545px) {
  width: 100%;
  flex-direction: column;
  align-items: start;
}     
`;