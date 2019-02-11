import styled from 'styled-components'

export const BItemHoveredText = styled.div`
  padding: 0 1rem 1rem;
  @media (max-width: 660px) {
    padding: 0 1rem 1rem;
  }
`;

export const BItemHoveredButtonWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 1em;
`;

export const BItemHoveredButton = styled.a`
  background-color: white;
  width: 100%;
  @media (max-width: 660px) {
    display: block;
    padding: 0.5em 3em 0.7em;
}
  @media (min-width: 661px) {
  display: inline-block;
  padding: 0.4em 0 0.5em;
  }
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
  @media (max-width: 660px) {
    &.open{
      .b-item__hovered {
        transition: all 0.5s ease;
        max-height: 30em;
      }
    }
  }
  &.link { 
    cursor: pointer; 
  }
  @media (max-width: 660px) {
    .b-item__hovered {
      box-shadow: none;
      transition: all 0.33s ease;
      max-height: 0;
      &-text {
        padding: 0 1rem 1rem;
      }
    }
  }
  @media (min-width: 661px) {
    .b-item__hovered {
      /* transition: all 0.33s ease-in;
      отвечает за разворачивание description.
      Варианты:
      - all, height+opacity - разворачиваться, но это не очень красиво;
      - только opacity - не разворачиваться, а просто появляться; */
      transition: opacity 0.33s cubic-bezier(0, 1, 1, 1);
      position: absolute;
      top: 90%;
      max-height: 0;
      width: 100%;
      margin-top: -1px;
      &-fat {
        font-weight: bold;
      }
      & * {
        opacity: 0;
      }
    }
    &:hover {
      z-index: 3;
      animation: z-in 0.33s;
      transition: all 0.33s ease;
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.25);
      & .b-item__hovered {
        transition: all 0.15s cubic-bezier(0, 1, 1, 1);
        max-height: 50em;
        box-shadow: 0 25px 50px -5px rgba(51, 51, 51, 0.5);
        & * {
          transition: all 0.15s cubic-bezier(0, 1, 1, 1);
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 661px) {
    .b-list-item {
      z-index: 0;
      animation: z-out 0.33s;
      transition: all 0.33s cubic-bezier(0, 1, 1, 1);
    }
  }

  @keyframes z-in {
    0% { z-index: 3; }
    100% { z-index: 3; }
  }

  @keyframes z-out {
    0% { z-index: 2; }
    100% { z-index: 2; }
  }
`;

export const BItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  position: relative;
  @media (min-width: 661px) {
    min-height: 10rem;
  }
`;

export const BItemContent = styled.div`
  p {
    font-size: 0.6em;
  }
  position: relative;
  p { 
    font-size: 1rem; 
  }
  @media (max-width: 660px) {
    padding: 0.5em 0;
  }
  @media (min-width: 661px) {
    padding: 0 1em;
    transition: all 0.5s cubic-bezier(0, 1, 1, 1);
  }
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
  display: block;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  margin-bottom: .75em;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    left: 50%;
    top: 100%;
  }
`;

export const BItemhovered = styled.div`
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
  &-text {
    padding: 0 1rem 1rem;
  }
  &-button-wrapper {
    display: block;
    width: 100%;
    padding: 1em;
  }
  &-button {
    background-color: white;
    width: 100%;
  }
`;