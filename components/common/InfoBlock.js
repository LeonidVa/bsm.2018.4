import React from 'react';

import styled from "styled-components"

const BlockInfoWrapper = styled.section `
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
    // font-size: 1.4em;
    padding: 1.56em 0.5em .94em;
    }`
const Item = styled.div` 
display: flex;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
justify-content: flex-start;
-webkit-box-pack: justify;
-webkit-justify-content: flex-start;
-ms-flex-pack: justify;
align-items: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
margin-bottom: 1em;
`;
        
const Img = styled.img`
margin-right: 1.06em; 
width: 1.56em;
`;
const Span = styled.span`
display: block;
`;

const Title = styled.span`
font-family: "Ubuntu", sans-serif;
font-weight: bold;
font-size: .625em;
line-height: 1.15;
`;
const Par = styled.span`
font-size: .5em;
line-height: 1.13;
`;

const renderInfoItems = (infoBlockConfig)=>(
    infoBlockConfig.map((item, index)=>(
      <Item className="item" key={index}>
        <Img src={item.icon} alt="" />
            <div className="text">
              <Span className="title"><Title>{item.title}</Title></Span>
              <Span className="par"><Par>{item.desc}</Par></Span>
            </div>
        </Item>
    ))
);

const InfoBlock = ({infoBlockConfig})=> (<BlockInfoWrapper>{renderInfoItems(infoBlockConfig)}</BlockInfoWrapper>);

export default InfoBlock;