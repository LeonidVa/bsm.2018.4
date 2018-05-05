import Color from 'color';

import messeger from 'img/messegers/messeger.svg'
import telegram from 'img/messegers/telegram.svg'
import viber from 'img/messegers/viber.svg'
import wechat from 'img/messegers/wechat.svg'
import whatsup from 'img/messegers/whatsup.svg'


//import './MessagersBlock.scss'

const color = Color('#ff8a65');

const messegers = (messegersList) => (
    <div className="block-mess__list">
        {messegersList.map((messegerItem, index)=>{
                return(
                  
                        <a  href="/#" 
                            target="_blank"
                            key={index} 
                            className="block-mess__item" 
                            style={{ background: color.darken(index / 10).string()}}>
                                    <img src={messegerItem} alt="" />
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
        {messegers([whatsup, viber, telegram, messeger, wechat])}
	</section>
)

export default MessBlock
