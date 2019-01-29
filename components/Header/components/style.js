import styled from 'styled-components';

export const ButtonMobile = styled.a`
  color: #4a4a4a;
  transition: all .4s;
  &:hover {
    color: #f4511e !important;
  }
  @media (max-width: 660px) { 
    display: block; 
  }
  @media (min-width: 661px) { 
    display: none; 
  }
`;

export const ButtonDesktop = styled.a`
  @media (max-width: 660px) { 
    display: none; 
  }
  @media (min-width: 661px) { 
    display: block; 
  }
`;

export const HamburgerWrapper = styled.div`
  width: 3em;
  height: 3em;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  position: relative;
  margin: 0.5em 2em 0;
  span {
    display: block;
    position: absolute;
    height: 0.33rem;
    width: 100%;
    background: #f4511e;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2), &:nth-child(3) {
      top: 1rem;
    }
    &:nth-child(4) {
      top: 2rem;
    }
  }
  .open span {
    &:nth-child(1) {
      top: 1rem;
      width: 0;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 1rem;
      width: 0;
      left: 50%;
    }
  }
  @media (min-width: 1331px) {
    margin: .66em -5em 0 2em;
  }
  @media (max-width: 1330px) {
    position: relative;
  }
  @media (max-width: 900px) {
    display: block;
    margin: 0.5em 1em 0;
  }
  @media (max-width: 660px) {
    position: absolute;
    right: 1em;
    top: 0.5em;
  }
  @media (max-width: 350px) {
    position: absolute;
    right: 0;
  }
`;

export const HamburgerMobile = styled.div`
  @media (max-width: 660px) {
    display: block;
  }
  @media (min-width: 661px) {
    display: none;
  }
`;

export const HamburgerDesktop = styled.div`
  @media (max-width: 660px) {
    display: none;
  }
  @media (min-width: 661px) {
    display: block;
  }
`;

export const MenuDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 3;
  background-color: #ffffff;
  padding: 80px 20px 0;
  font-size: 1.25rem;
  transition: all .5s;
  overflow-y: scroll;
  .item {
    display: flex;
    color: #333333;
    text-decoration: none;
    padding: .5em 0;
    flex-direction: column;
    align-items: flex-start;
  }
  .title {
    font-size: 1.5em;
  }
  .list{
    padding-left: 1em;
  }
  a {
    &:hover,
    &:active {
      color: #f4511e;
    }
  }
  ul li a {
    display: inline-block;
    font-size: 1.5em;
    color: #f4511e;
    text-decoration: none;
    padding: .4em 0;
  }
  .close {
    width: 50px;
    height: 32px;
    position: absolute;
    top: 50%;
    margin-top: -16px;
    right: 9px;   
  }
  .line {
    width: 100%;
    height: 6px;
    background-color: #f4511e;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -3px;
    transform: rotate(44deg);
    &:last-child {
      transform: rotate(-44deg);
    }
  }
`;

export const AItemTitle = styled.a`
  display: flex;
  color: #333333;
  text-decoration: none;
  padding: .5em 0;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5em;
  font-family: "Ubuntu", sans-serif;
  display: inline-block;
  font-size: 1.5em;
  color: #f4511e;
  text-decoration: none;
  padding: .4em 0;
  &:hover,
  &:active {
    color: #f4511e;
  }
`;

export const AItemListItem = styled.a`
  display: inline-block;
  font-size: 1.5em;
  color: #f4511e;
  text-decoration: none;
  padding: .4em 0;
  &:hover,
  &:active {
    color: #f4511e;
  }
  display: flex;
  color: #333333;
  text-decoration: none;
  padding: .5em 0;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuDivBlock = styled.div`
  position: fixed;
  width: 100%;
  overflow: hidden;
  background-color: #fafafa;
  top: -200%;
  left: 0;
  z-index: 3;
  padding: 3.25em 0 5.125em;
  transition: all .5s;
  &.open {
    top: 3em;
  }
  .inner {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
  .item {
    border-right: 0.0625em solid #cfd8dc;
    margin-right: 1em;
    padding-right: 1em;
    &:last-child {
      border-right: none;
      margin-right: 0;
      .lists .list {
        width: 50%;
        &:first-child {
          padding-right: 0.75em;
        }
      }
    }
  }
  .lists {
    margin-bottom: 2.125em;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .list {
    font-size: 1rem;
    width: 100%;
    min-width: 14rem;
    padding-right: 10px;
    &--item {
      margin-bottom: 1em;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        color: #4a4a4a;
        text-decoration: none;
        &:hover {
          color: #d84315;
          text-decoration: underline;
        }
      }
      &-header {
        display: none;
        font-size: 120%;
        a {
          margin-left: 0;
          color: #f4511e;
        }
      }
      &-subheader {
        font-size: 110%;
        a { margin-left: 0; color: #f4511e; }
      }
    }
  }
`;
