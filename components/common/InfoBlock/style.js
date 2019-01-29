import styled from 'styled-components'

export const BlockInfoWrapper = styled.section`
width: 17em;
margin: 1.56em auto 0;
background-color: #fff;
font-size: 2em;
padding: 1.56em 1.09em .94em;
color: #4a4a4a;
position: relative;
z-index: 1;
box-sizing: border-box;
@media (max-width: 900px) {
  width: 70%;
  min-width: 273px;
}
@media (max-width: 660px) {
  width: 100%;
  padding: 1.56em 0.5em .94em;
}
`;

export const Item = styled.div` 
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 1em;
`;

export const Img = styled.img`
margin-right: 1.06em; 
width: 1.56em;
`;

export const Span = styled.span`
display: block;
`;

export const TitleSpan = styled.span`
font-weight: bold;
font-size: .625em;
line-height: 1.15;
`;

export const Par = styled.span`
font-size: .5em;
line-height: 1.13;
`;