const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

import * as Trello from 'trello-node-api';

let boardRequest = async function () {
    let response = await Trello.board.search('ABCD').catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

boardRequest();