import styled from 'styled-components'

export const BlockQuality = styled.section`
  width: 100%;
  font-size: 1rem;
  background-color: #ffffff;
  max-width: 62em;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
`;

export const QualityList = styled.ul`
 display: flex;
 flex-wrap: wrap;
`;

export const QualityListInner = styled.div`
  font-size: 1.33em;
  display: block;
  padding: 1em 1.5em;
  color: #4a4a4a;
  text-decoration: none;
  @media (max-width: 900px) {
    padding: 2em 1em;
  }
  @media (max-width: 660px) {
    padding: 1.25em 0.75em;
  }
  @media (max-width: 480px) {
    padding: 0.75em 0.5em;
  }
  p {
    padding-top: 1em;
    &:first-child {
        padding-top: 0;
    }
    font-size: 0.85em;
    line-height: 1.57;
    @media (max-width: 480px) {
        font-size: 0.75em;
    }
}
`;

export const QualityListItem = styled.li`
  &.w33 { width: 33.33333333%; }
  &.w66 { width: 66.66666666%; }
  &.w50 { width: 50%; }
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #cfd8dc;
  transition: all .2s;
  &:hover {
    box-shadow: inset 0px 0px 0px 0.2em #cfd8dc;
    @media (max-width: 660px) {
        box-shadow: inset 0px 0px 0px 0.125em #cfd8dc;
    }
    @media (max-width: 480px) {
        box-shadow: inset 0px 0px 0px 0.075em #cfd8dc;
    }
  }
  @media (max-width: 660px) {
    width: 100%;
    &.w33 { width: 100%; }
    &.w66 { width: 100%; }
    &.w50 { width: 50%; }
    &:nth-child(2),
    &:nth-child(6) {
        border-right: 1px solid #cfd8dc;
    }
    &:nth-child(5),
    &:nth-child(6) {
        border-bottom: none;
    }
  }
  @media (max-width: 480px) {
    &.w50 { width: 100%; }
  }
`;

export const QualityListTitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25em;
  img {
    display: block;
    width: 1em;
    margin-right: 0.5em;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    align-items: flex-start;
    img {
        margin-bottom: 0.2em;
    }
  }
`;

export const BlockQualityQualityListTitle = styled.span`
  line-height: normal;
  font-weight: bold;
`;