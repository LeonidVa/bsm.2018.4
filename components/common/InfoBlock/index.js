import React from 'react';

import {
  BlockInfoWrapper,
  Item,
  Img,
  Span,
  TitleSpan,
  Par
} from "./style.js"

const renderInfoItems = (infoBlockConfig)=>(
    infoBlockConfig.map((item, index)=>(
      <Item className="item" key={index}>
        <Img src={item.icon} alt="" />
          <div className="text">
            <Span className="title"><TitleSpan>{item.title}</TitleSpan></Span>
            <Span className="par"><Par>{item.desc}</Par></Span>
          </div>
        </Item>
    ))
);

const InfoBlock = ({infoBlockConfig})=> (<BlockInfoWrapper>{renderInfoItems(infoBlockConfig)}</BlockInfoWrapper>);

export default InfoBlock;