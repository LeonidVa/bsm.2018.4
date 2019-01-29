import React, {Component} from 'react'
import socials from 'data/socials';
import stat from 'utils/analytics';
import {
  BlockMess,
  BlockMessItem,
  BlockMessList,
  BlockMessTitle
} from "./style.js";

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
