var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var cardAttachementRequest = function () {
    var data = {
        name: 'Attachement name',
        url: 'Attachement url',
        file: 'Attachement file',
        mimeType: 'Attachement url',
    };
    Trello.card.addAttachment('idCard', data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

cardRequest();