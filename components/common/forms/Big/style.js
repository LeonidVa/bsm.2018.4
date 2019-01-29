import styled from 'styled-components';

export const BlockFormItem = styled.div`
  height: 2.5em;
  transition: all .4s;
  &-flex {
    display: flex;
    justify-content: space-between;
    .block-form__item {
      max-width: 48%;
    }
  }   
  &__file {
    opacity: 0;
    height: 0;
  }
  &.textarea {
    height: 4.33em;
  }
`;

export const DropZone = styled.div`
  div {
    border: none !important;
    text-decoration: underline;
    height: 40px !important;
    color: #f4511e;
    cursor: pointer;
    font-weight: 500;
  }  
`;

export const BlockFormRed = styled.section`
  box-sizing: border-box;
  font-size: 2em;
  width: 17em;
  margin: 1.56em auto 0;
  border: none;
  background-color: #ffffff;
  padding: 1.56em 2.3em;
  position: relative;
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
  @media (max-width: 660px) {
    width: 100%;
    padding: 1.56em .5em;
  }
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

export const BLockFormAgree = styled.span`
  display: block;
  text-align: center;
  font-size: 0.33em;
`;

export const BlockFormMoreInfo = styled.a`
  display: block;
  text-align: center;
  font-size: .5em;
  color: #f4511e;
  margin-top: 1.2em;
  position: relative;
  z-index: 100;
  cursor: pointer;
`;

export const BlockFormTitle = styled.div`
  color: #f4511e;
  font-size: 1em;
  font-weight: bold;
  line-height: 1.19;
  text-align: center;
  margin-bottom: .625em;
  letter-spacing: -1px;
`;

export const BlockFormMessage = styled.div`
  text-align: center;
  img { 
    width: 7em; 
    margin-left: 41px;
  }
  p {  
    font-size: 1rem; 
    margin-bottom: 7px;
  }
  &.form_notification {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4A4A4A;
    border: 2px solid #d84315;
  }
`;

export const BlockFormClose = styled.div`
  margin-left: 5px;
  color: #f4511e;
  cursor: pointer;
`;

export const FormLabel = styled.label`
  line-height: 1.33em;
  font-size: .5em;
  color: #4a4a4a;
  display: block;
  margin-bottom: .16em;
`;

export const FormInput = styled.input`
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

export const FormTextarea = styled.textarea`
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