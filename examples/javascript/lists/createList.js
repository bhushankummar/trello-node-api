var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var listRequest = function () {
    var data = {
        name: 'LIST_NAME', // REQUIRED
        idBoard: 'BOARD_ID', // REQUIRED
        idListSource: 'LIST_ID',
        pos: 'top'
    };
    Trello.list.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

listRequest();