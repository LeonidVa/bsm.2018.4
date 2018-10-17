import React, {Component} from 'react'
import stat from 'utils/analytics';
import facebookMessenger from 'static/images/messegers/facebook-messenger.svg'
import telegram from 'static/images/messegers/telegram.svg'
import whatsapp from 'static/images/messegers/whatsapp.svg'
import vk from 'static/images/messegers/vk.svg'
import instagram from 'static/images/messegers/instagram.svg'
import './index.scss'

const colors = [
    '#d84315',
    '#e64a19',
    '#f4511e',
    '#ff7043',
    '#ff8a65',
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
                           style={{background: colors[index]}}
                           title={item.title}
                           rel="nofollow"
                           onClick={handleClick}
                        >
                            <img src={item.icon} alt={item.title}/>
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
            {this.drawList([
                {
                    icon: vk,
                    title: "VK",
                    url: "https://vk.com/im?sel=-129623016",
                    targetID: "vk"
                },
                {
                    icon: facebookMessenger,
                    title: "Facebook Messenger",
                    url: "https://www.facebook.com/messages/t/besmarter.better/",
                    targetID: "facebook"
                },
                {
                    icon: telegram,
                    title: "Телеграм",
                    url: "https://t.me/besmarter_ru",
                    targetID: "telegram"
                },
                {
                    icon: whatsapp,
                    title: "WhatsApp",
                    url: "https://api.whatsapp.com/send?phone=79257729045",
                    targetID: "whatsapp"
                },
                {
                    icon: instagram,
                    title: "Instagram",
                    url: "https://www.instagram.com/besmarter_moscow/",
                    targetID: "instagram"
                },
            ])}
        </section>
    }
}

export default MessBlock
