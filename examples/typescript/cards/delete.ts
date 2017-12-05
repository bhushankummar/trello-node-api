const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let cardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let response = await Trello.card.del('5a268f25d685cc7b157e822d').catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

cardRequest();