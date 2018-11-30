import React, {Component} from 'react'
import socials from 'data/socials';
import stat from 'utils/analytics';
import './index.scss'

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
    return <div className="block-mess__list">
      {messegersList.map((item, index) => {
          const handleClick = () => {
            stat.triggerTarget.messengerClicked(item.targetID)
          };
          return (
            <a href={item.url}
               target="_blank"
               key={index}
               className="block-mess__item"
               style={{background: colors[index], padding: "2.33em"}}
               title={item.title}
               rel="nofollow"
               onClick={handleClick}
            >
              {item.icon}
            </a>
          )
        }
      )
      }
    </div>
  };

  render() {
    return <section className="block-mess">
      <span className="block-mess__title">Спроси нас:</span>
      {this.drawList([vk, facebookMessenger, telegram, whatsapp, instagram])}
    </section>
  }
}

export default MessBlock
