import styled from "styled-components"

export const BlockSlider = styled.section`
  margin: 1.56em auto 0;
  font-size: 2em;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    justify-content: space-around;
    margin: 0.5em auto;
  }
`;

export const BlockSliderSlide = styled.div`
  font-size: 1em;
  margin: 0 auto;
  padding: 0 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const BlockProfitsItem = styled.div`
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 1em;
  width: 8.59em;
  padding: 1em;
  background-color: #ffffff;
  &:nth-child(1) img,
  &:nth-child(3) img {
    width: 3.125em;
  }
  &:nth-child(2) img {
    width: 2.28em;
  }
  @media (max-width: 960px) {
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 1em;
  background-color: #ffffff;
  img {
    display: block;
    margin: 0 auto .625em;
    height: 3.125em;
  }
  &:nth-child(1) img,
  &:nth-child(3) img {
    width: 3.125em;
  }
  &:nth-child(2) img {
    width: 2.28em;
  }
  @media (max-width: 660px) {
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto .625em;
  height: 3.125em;
`;

export const BlockProfitsPar = styled.p`
  font-size: .5em;
  line-height: 1.5em;
  transition: all .4s;
`; 

export const BlockProfitsTitle = styled.span`
  font-weight: 500;
  font-size: .625em;
  color: #4a4a4a;
  margin-bottom: .5em;
  position: relative;
  transition: all .4s;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #f4511e;
    top: 100%;
    left: 50%;
    transition: all .4s;
  }
`;

export const DivSlick = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;
