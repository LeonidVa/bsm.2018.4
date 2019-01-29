import styled from 'styled-components'

export const BItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  position: relative;
  @media (min-width: 661px){
    min-height: 10rem;
  }
`;

export const BItem_Content = styled.div`
  position: relative;
  p { 
    font-size: 1rem; 
  }
`;

export const BItemHovered = styled.div`
  left: 0;
  width: inherit;
  height: inherit;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: red;
  }
`;

export const BItemHoveredText = styled.div`
  padding: 0 1rem 1rem;
`;

export const BItemHoveredButtomWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 1em;
`;

export const BlockServiceListItem = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: default;
  display: block;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  &:nth-child(1) {
    background-color: #fd704b;
    @media (max-width: 660px) {
      border-bottom: 1px solid #fc7553;
    }
    .b-item__hovered {
      background-color: #fd704b;
    }
  }
  &:nth-child(2) {
    background-color: #ff5722;
    @media (max-width: 660px) {
      border-top: 1px solid #fc5420;
      border-bottom: 1px solid #ff5c2b;
    }
    .b-item__hovered {
      background-color: #ff5722;
    }
  }
  &:nth-child(3) {
    background-color: #f4511e;
    @media (max-width: 660px) {
      border-top: 1px solid #f24e1d;
      border-bottom: 1px solid #f45524;
    }      
    .b-item__hovered {
      background-color: #f4511e;
    }
  }
  &:nth-child(4) {
    background-color: #e64a19;
    @media (max-width: 660px) {
    border-top: 1px solid #e24818;
    border-bottom: 1px solid #e54e20;
  }   
    .b-item__hovered {
      background-color: #e64a19;
    }
  }
  &:nth-child(5) {
    background-color: #d84315;
    @media (max-width: 660px) {
      border-top: 1px solid #d64215;
    }
    .b-item__hovered {
      background-color: #d84315;
    }
  }
  &:hover {
    @media (min-width: 661px) {
      transform: scale(1.04);
      .block-service__list-title::after {
        transition: all 0.3s ease-in-out;
        width: 100%;
        left: 0;
      }
    }
    .block-service__list-description {
      opacity: 1;
    }
  }
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: default;
`;

export const BItemHoveredButton = styled.a`
  background-color: white;
  width: 100%;
`;

export const BlockServiceListTitle = styled.div`
  @media (min-width: 661px) and (max-width: 780px) {
    font-size: 1.3rem;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (min-width: 661px) and (max-width: 800px) {
    font-size: 1.2rem;
  }
  .block-service__list-title::after {
    transition: all 0.3s ease-in-out;
    width: 100%;
    left: 0;
  }
`;