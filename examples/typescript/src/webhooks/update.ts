const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let webhookRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'WEBHOOK_ID'; // REQUIRED
    let data = {
        displayName: 'ORGANIZATION_DISPLAY_NAME',
        description: 'Webhook descriptions',
        callbackURL: 'https://mycallbackurl.com/',
        idModel: 'MODEL_ID',
        active: false
    };
    let response;
    try {
        response = await Trello.webhook.update(id, data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

webhookRequest();
