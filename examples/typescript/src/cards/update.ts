const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let cardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'CARD_ID'; // REQUIRED
    let data = {
        name: 'CARD_NAME_TEST',
        desc: 'Card description',
        closed: false,
        idMembers: 'MEMBER_ID,MEMBER_ID,MEMBER_ID',
        idAttachmentCover: null,
        idList: 'LIST_ID',
        idLabels: 'LABEL_ID, LABEL_ID, LABEL_ID',
        idBoard: false,
        pos: 'top',
        due: null,
        dueComplete: false,
        subscribed: false,
    };
    let response;
    try {
        response = await Trello.card.update(id, data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

cardRequest();
