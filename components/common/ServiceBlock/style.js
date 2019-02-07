import styled from 'styled-components';

export const BlockServiceTop = styled.a`
  min-height: 10rem;
  height: auto;
  display: flex;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: right top;
  text-decoration: none;
  color: #333333;
  transition: all 0.33s ease;
  @media (max-width: 900px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 77%;
  }
  @media (max-width: 660px) {
    background-position-x: 72%;
  }
  &:hover {
    position: relative;
    z-index: 3;
    transform: scale(1.03);
    transition: all 0.33s ease;
    .block-service__top-title-underline {
      transition: all 0.5s ease;
      left: 0;
      width: 100%; 
    }
  }
`;

export const BlockServiceText = styled.div`
  & p {
    font-size: 1.4rem;
    max-width: 24rem;
    line-height: normal;
    margin-bottom: 1rem;
  }
  padding: 3rem;
  @media (max-width: 660px) {
    padding: 3rem 1rem 1.5rem;
    &.gradient-l-white {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.66),
        rgba(255, 255, 255, 0.5),
        transparent
      );
    }
    &.gradient-l-black {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.66),
        rgba(0, 0, 0, 0.5),
        transparent
      );
    }
  }
`;

export const BlockServiceTopTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
  position: relative;
  font-size: 2rem;
  &:hover {
    transition: all 0.5s ease;
    left: 0;
    width: 100%;
  }
`;

export const BlockServiceTopTitleUnderline = styled.span`
  position: absolute;
  width: 0;
  height: 1px;
  background-color: #333333;
  left: 50%;
  top: 100%;
  transition: all 0.5s ease;
`;

export const BlockService = styled.section`
  background-color: white;
  width: 100%;
  font-size: 1rem;
  max-width: 62rem;
  margin: 1.5rem auto 0;
  position: relative;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const BlockServiceList = styled.div`
  display: flex;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  margin-bottom: .75em;
  color: #ffffff;
  text-align: center;
  @media (max-width: 660px) {
    display: block;
  }
  &.list-1 {
    .block-service__list-item {
      width: 100%;
    }
  }
  &.list-2 {
    .block-service__list-item {
      width: 50%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-3 {
    .block-service__list-item {
      width: 33.3333%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-4 {
    .block-service__list-item {
      width: 25%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-5 {
    .block-service__list-item {
      width: 20%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &-title {
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
  }
`;