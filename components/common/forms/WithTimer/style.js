import styled from 'styled-components'

export const FormTimer = styled.div`
  @media (max-width: 660px) {
    display: inline-block;
  }
`;

export const BlockFormTimerMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  width: 14.9em;
  margin-bottom: .875em;
  @media (max-width: 660px) {
    display: block;
  }
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
`;

export const Notification = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4A4A;
  border: 2px solid #d84315;
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

export const FormP = styled.p`
  font-size: .688em;
  line-height: normal;
  width: 100%;
`;