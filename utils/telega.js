import axios from 'axios'
import getConfig from 'next/config';

const {serverRuntimeConfig = {}} = getConfig();

export default function telega(text) {
    if (text === ""
        || serverRuntimeConfig.telega === undefined
        || serverRuntimeConfig.telega.dialogID === undefined
        || serverRuntimeConfig.telega.APIKey === undefined
    ) {
        return false;
    }
    try {
        return telegramSend(serverRuntimeConfig.telega.APIKey, serverRuntimeConfig.telega.dialogID, text);
    } catch (e) {
        console.log('telega failed')
    }
}


function telegramSend(APIKey, chatID, text) {
    if (typeof text === "undefined" || text === "") {
        return false;
    }
    const url = 'https://api.telegram.org/bot' + APIKey + '/sendMessage';
    const data = {
        'chat_id': chatID,
        'text': text,
        'parse_mode': 'HTML',
    };
    axios({
        method: 'POST',
        url: url,
        data: data,
        config: {headers: {'Content-Type': 'application/json'}}
    }).then(function (response) {
        //handle success
        console.log('telegram message sent to ' + chatID + ' text \"' + text + '\"');
        //console.log(response);
    }).catch(function (response) {
        //handle error
        console.log('telega error');
        //console.log(response);
    });
    return true;
}