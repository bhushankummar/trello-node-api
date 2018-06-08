const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let boardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let response;
    try {
        response = await Trello.enterprise.search('ENTERPRISE_ID');
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

boardRequest();
