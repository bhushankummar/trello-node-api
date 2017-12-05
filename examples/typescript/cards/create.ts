const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let cardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let data = {
        name: 'CARD_NAME',
        desc: 'Card description',
        pos: 'top',
        idList: 'LIST_ID', //required
        due: false,
        dueComplete: false,
        idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
        idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
        urlSource: '',
        fileSource: '',
        idCardSource: '',
        keepFromSource: '',
    };
    let response = await Trello.card.create(data).catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

cardRequest();