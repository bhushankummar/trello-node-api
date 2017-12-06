const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let checklistRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'CHECKLIST_ID';
    let data = {
        name: 'CHECKLIST_NAME',
        pos: 'top'
    };
    let response = await Trello.checklist.update(id, data).catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

checklistRequest();