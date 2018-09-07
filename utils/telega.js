import axios from 'axios'

export default function telega(text) {
    if (process.env.telegaDialogID === undefined) {
        return false;
    }
    try {
        telegramSend(process.env.telegaDialogID, text);
    } catch (e) {
        console.log('telega failed')
    }
}


function telegramSend(chatID, text) {
    if (typeof text === "undefined" || text === "" || process.env.telegaAPIKey === undefined || process.env.telegaAPIKey === "") {
        return false;
    }
    const url = 'https://api.telegram.org/bot' + process.env.telegaAPIKey + '/sendMessage';
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
        console.log('telegram message sent to '+chatID);
        //console.log(response);
    }).catch(function (response) {
        //handle error
        console.log('telega error');
        //console.log(response);
    });
}