const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
//import * as Trello from '../../../lib/trello-node-api';
//as Trello from 'trello-node-api';
import * as Trello from 'trello-node-api';


const TC = new Trello();

let boardRequest = async function () {
    console.log('This is boardRequest function');
    TC.setApiKey('A');
    console.log('Set API Completed');
    TC.setOauthToken('B');
    console.log('Start search Hello');
    let response = await TC.board.search('ABCD').catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

boardRequest();