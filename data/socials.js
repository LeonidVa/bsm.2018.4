
import { faFacebookF, faYoutube, faTelegramPlane, faWhatsapp, faInstagram, faFacebookMessenger, faVk} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default {
  vk: {
    icon: <FontAwesomeIcon icon={faVk}/>,
    title: "VK",
    url: "https://vk.com/id372065572",
    targetID: "vk"
  },
  facebook: {
    icon: <FontAwesomeIcon icon={faFacebookF}/>,
    title: "Facebook",
    url: "https://www.facebook.com/besmarter.better",
    targetID: "facebook"
  },
  facebookMessenger: {
    icon: <FontAwesomeIcon icon={faFacebookMessenger}/>,
    title: "Facebook Messenger",
    url: "https://www.messenger.com/t/besmarter.better",
    targetID: "facebook"
  },
  telegram: {
    icon: <FontAwesomeIcon icon={faTelegramPlane}/>,
    title: "Телеграм",
    url: "https://t.me/besmarter_ru",
    targetID: "telegram"
  },
  whatsapp: {
    icon: <FontAwesomeIcon icon={faWhatsapp}/>,
    title: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=79257729045",
    targetID: "whatsapp"
  },
  instagram: {
    icon: <FontAwesomeIcon icon={faInstagram}/>,
    title: "Instagram",
    url: "https://www.instagram.com/besmarter_ru/",
    targetID: "instagram"
  },
  youtube: {
    icon: <FontAwesomeIcon icon={faYoutube}/>,
    title: "Instagram",
    url: "https://www.youtube.com/channel/UCLlOZuoLW6knK1QTMf6yJ7g",
    targetID: "youtube"
  },
}