import styled from 'styled-components'

export const BlockMess = styled.section `
font-size: 1em;
width: 34em;
margin: 1em auto 0;
background-color: #fff;
position: relative;
z-index: 1;
@media (max-width: 900px) {
  width: 70%;
  min-width: 273px;
}
@media (max-width: 660px) {
  width: 100%;
}
`;

export const BlockMessItem = styled.a `
color: white;
width: 20%;
display: flex;
align-items: center;
justify-content: center;
height: 7em;
transition: all .3s;
svg { 
  font-size: 33%; 
}
img { 
  width: 33%; 
}
@media (max-width: 660px) {
  height: 17vw;
  min-height: 4em;
}
`;

export const BlockMessList = styled.div `
display: flex;
`;

export const BlockMessTitle = styled.span`
font-size: 2em;
display: block;
padding: 0.625em 1.06em 0.56em;
color: #4a4a4a;
@media (max-width: 660px) {
  padding: .625em .5em .56em;
}
`;