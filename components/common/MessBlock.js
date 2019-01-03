import React, {Component} from 'react'
import socials from 'data/socials';
import stat from 'utils/analytics';
import styled from "styled-components"


const BlockMess = styled.section `
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
        // font-size: 1.4em;
    }
`;


const BlockMessItem = styled.a `
color: white;
width: 20%;
display: flex;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
align-items: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
justify-content: center;
-webkit-box-pack: justify;
-webkit-justify-content: center;
-ms-flex-pack: justify;
height: 7em;
transition: all .3s;
svg { font-size: 33%; }
img { width: 33%; }
@media (max-width: 660px) {
  height: 17vw;
  min-height: 4em;
}
`;

const BlockMessList = styled.div `
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
`;

const BlockMessTitle = styled.span`
font-size: 2em;
display: block;
padding: 0.625em 1.06em 0.56em;
color: #4a4a4a;
@media (max-width: 660px) {
    padding: .625em .5em .56em;
}
`;

const {vk, facebookMessenger, telegram, whatsapp, instagram} = socials;
const colors = [
  '#ff8a65',
  '#ff7043',
  '#f4511e',
  '#e64a19',
  '#d84315',
];



class MessBlock extends Component {
  drawList(messegersList) {
    return <BlockMessList className="block-mess__list">
      {messegersList.map((item, index) => {
          const handleClick = () => {
            stat.triggerTarget.messengerClicked(item.targetID)
          };
          return (
            <BlockMessItem href={item.url}
               target="_blank"
               key={index}
               className="block-mess__item"
               style={{background: colors[index]}}
               title={item.title}
               rel="nofollow noopener"
               onClick={handleClick}
            >
              <img src={item.icon}/>
            </BlockMessItem>
          )
        }
      )
      }
    </BlockMessList>
  };

  render() {
    return <BlockMess className="block-mess">
      <BlockMessTitle className="block-mess__title">Спроси нас:</BlockMessTitle>
      {this.drawList([vk, facebookMessenger, telegram, whatsapp, instagram])}
    </BlockMess>
  }
}

export default MessBlock
