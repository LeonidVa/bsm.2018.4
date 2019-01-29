import styled from 'styled-components';

export const BlockFormItem = styled.div`
  height: 2.5em;
  transition: all .4s;
  &-flex {
    display: flex;
    justify-content: space-between;
  }
`;

export const TextArea = styled.div`
  display: block;
  font-size: .44em;
  width: 100%;
  height: 7em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  resize: none;
  &:focus {
    border: 1px solid #f4511e;
  }
`;

export const Input = styled.input`
  display: block;
  font-size: .44em;
  width: 100%;
  height: 3.21em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  &:focus {
    border: 1px solid #f4511e;
  }
`;

export const Label = styled.label`
  line-height: 1.33em;
  font-size: .5em;
  color: #4a4a4a;
  display: block;
  margin-bottom: .16em;
`;

export const BlockFormBtn = styled.button`
  font-size: .56em;
  display: block;
  margin: 1.33em auto 0;
  width: 11.38em;
  height: 2.78em;
  background-color: #f4511e;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all .4s;
  position: relative;
  z-index: 100;
  &:not(:disabled):hover {
    background-color: #922d0e;
  }
`;

export const ModalOrderCallDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.8);
  z-index: 5;
  overflow-y: scroll;
`;

export const BlockForm = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8.5em;
  margin-top: 0;
  transform: translateY(-50%);
  @media (max-width: 660px) {
    margin-left: 0;
    left: 0;
  }
  font-size: 2em;
  width: 17em;
  border: none;
  background-color: #ffffff;
  padding: 1.56em 2.3em;
  z-index: 1;
  transition: all .4s;
  &.form-red {
    border: solid 2px #f4511e;
    .block-form__title {
      color: #f4511e;
    }
    .block-form__more-info {
      margin: 1.25em 0 2.25em;
    }
  } 
`;