import Link from 'next/link';

import Color from 'color';

import facebookMessenger from 'img/messegers/facebook-messenger.svg'
import telegram from 'img/messegers/telegram.svg'
import viber from 'img/messegers/viber.svg'
import wechat from 'img/messegers/wechat.svg'
import whatsapp from 'img/messegers/whatsapp.svg'
import vk from 'img/messegers/vk.svg'
import instagram from 'img/messegers/instagram.svg'

//vk https://vk.com/im?sel=-129623016
const color = Color('#ff8a65');

const messegers = (messegersList) => (
    <div className="block-mess__list">
        {messegersList.map((item, index) => {
                return (
                        <a href={item.url}
                           target="_blank"
                           key={index}
                           className="block-mess__item"
                           style={{background: color.darken(index / 10).string()}}
                           title={item.title}
                        >
                            <img src={item.icon} alt={item.title}/>
                        </a>
                )
            }
        )
        }
    </div>
)


const MessBlock = () => (
    <section className="block-mess">
        <span className="block-mess__title">Спроси нас:</span>
        {messegers([
            {
                icon: vk,
                title: "VK",
                url: "https://vk.com/im?sel=-129623016"
            },
            {
                icon: facebookMessenger,
                title: "Facebook Messenger",
                url: "https://www.facebook.com/messages/t/besmarter.better/"
            },
            {
                icon: telegram,
                title: "Телеграм",
                url: ""
            },
            {
                icon: whatsapp,
                title: "WhatsApp",
                url: "https://api.whatsapp.com/send?phone=79257729045"
            },
            {
                icon: instagram,
                title: "Instagram",
                url: "https://www.instagram.com/besmarter_moscow/"
            },
        ])}
    </section>
)

export default MessBlock
