const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

let trelloNode = require('../../lib/trello-node-api')(apiKey, oauthToken);

let boardRequest = async function () {
    let response = await trelloNode.board.search('ABCD').catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

boardRequest();