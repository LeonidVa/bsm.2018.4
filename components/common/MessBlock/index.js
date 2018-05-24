import Link from 'next/link';

// import Color from 'color';

import facebookMessenger from 'static/images/messegers/facebook-messenger.svg'
import telegram from 'static/images/messegers/telegram.svg'
import whatsapp from 'static/images/messegers/whatsapp.svg'
import vk from 'static/images/messegers/vk.svg'
import instagram from 'static/images/messegers/instagram.svg'

const colors = [
    '#d84315',
    '#e64a19',
    '#f4511e',
    '#ff7043',
    '#ff8a65',
];
const messegers = (messegersList) => (
    <div className="block-mess__list">
        {messegersList.map((item, index) => {
                return (
                    <a href={item.url}
                       target="_blank"
                       key={index}
                       className="block-mess__item"
                       style={{background:colors[index]}}
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
