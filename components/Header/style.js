import styled from 'styled-components';

export const HeaderBlock = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 4;
    padding: 0 1em;
    border-bottom: 1px solid #fafafa;
`;
export const InnerBlock = styled.div`
    min-height: 3.67em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    max-width: 990px;
    margin: 0 auto;
    @media (max-width: 660px) {
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
    }
`;

export const HeaderLeftDiv = styled.div`
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: center;
    -ms-flex-pack: justify;
`;


export const HeaderRightDiv = styled.div`
      display: flex;
      align-items: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      justify-content: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: center;
      -ms-flex-pack: justify;
      @media (max-width: 900px) {
          margin-right: .66em;
      }
      @media (max-width: 660px) {
          margin-right: 0;
      }
`;

export const HeaderLogoBlock = styled.a`
    font-size: 2em;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    color: #f05638;
    text-decoration: none;
    margin-right: 4px;
    margin-left: -160px;
    transition: color 0.4s ease;
    @media (max-width: 1330px) {
        margin-left: 0;
    }
    
    @media (max-width: 660px) {
        margin: 0;
        line-height: normal;
        padding-top: 5px;
       
    }
    &:hover {
        color: #4a4a4a;

        span {
            color: #f05638;
            transition: color 0.46s ease-out;
        }
    }
`;

export const LogoSpan = styled.span`
  color: #4a4a4a;
  transition: color 0.4s ease-in;
`;


export const HeaderNav = styled.nav`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  `;

export const HeaderLi = styled.li`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
`;

export const HeaderNavA = styled.a`
    font-weight: 500;
    font-size: 1.125em;
    color: #4a4a4a;
    text-decoration: none;
   
    transition: all .4s;
    position: relative;
    margin-left: 2.44em;
    &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: #f4511e;
        left: 50%;
        bottom: 0;
        margin-top: -1.25em;
        transition: all .4s;
    }
    &:hover {
        color: #f4511e;
        &::after {
            left: 0;
            width: 100%;
        }
    }
   
    @media (max-width: 970px) {
        margin-left: 1.44em;
    }
`;

export const HeaderOrderTel = styled.a`
    font-weight: 500;
    font-size: 1.125em;
    color: #f4511e;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: #f4511e;
        left: 50%;
        bottom: 0;
        transition: all .4s;
    }
    &:hover::after {
        left: 0;
        width: 100%;
    }
    @media (max-width: 660px) {
        display: none;
    }
`;

export const HeaderOrderCall = styled.span`
color: #f4511e;
  @media (max-width: 660px) {
            display: none;
  }
`;

export const ButtonPhoneS = styled.div`

    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    color: #4a4a4a;
    margin-right: 3.11em;
    
    transition: all .4s;
    cursor: pointer;
    
    @media (max-width: 970px) {
      margin-right: 2.11em;
    }
    @media (max-width: 900px) {
      margin-right: 1em;
    }
    @media (max-width: 660px) {
      margin: 0;
      padding: 0;
      line-height: normal;
      padding-bottom: 5px;
      
    }
 
    &-mobile {
      @media (max-width: 660px) { display: block; }
      @media (min-width: 661px) { display: none; }
    }
    &-desktop {
      @media (max-width: 660px) { display: none; }
      @media (min-width: 661px) { display: block; }
    }
  }
`;

export const HeaderHamburger = styled.div`
// width: 3em;
// height: 3em;
// transform: rotate(0deg);
// transition: .5s ease-in-out;
// cursor: pointer;
// position: relative;
// margin: 0.5em 2em 0;


// @media (max-width: 660px) {
//   &-mobile { display: block; }
//   &-desktop { display: none; }
// }
// @media (min-width: 661px) {
//   &-mobile { display: none; }
//   &-desktop { display: block; }
// }
    & span {
      display: block;
      position: absolute;
      height: 0.33rem;
      width: 100%;
      background: #f4511e;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
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
    &.open span {
      &:nth-child(1) {
        top: 1rem;
        width: 0;
        left: 50%;
      }
      &:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 1rem;
        width: 0;
        left: 50%;
      }
    }
  
`;

