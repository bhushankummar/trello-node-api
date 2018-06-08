const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let checklistRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let data = {
        idCard: 'CARD_ID', // REQUIRED
        name: 'CHECKLIST_NAME',
        pos: 1
    };
    let response;
    try {
        response = await Trello.checklist.create(data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

checklistRequest();
