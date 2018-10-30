const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let organizationRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let data = {
        displayName: 'ORGANIZATION_NAME', // REQUIRED
        desc: 'Organization description',
        name: 'NAME',
        website: 'https://example.com'
    };
    let response;
    try {
        response = await Trello.organization.create(data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

organizationRequest();
