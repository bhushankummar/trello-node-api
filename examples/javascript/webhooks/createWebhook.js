var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var webhookRequest = function () {
    var data = {
        description: 'Webhook description',
        callbackURL: 'https://mycallbackurl.com/', // REQUIRED
        idModel: 'MODEL_ID', // REQUIRED
        active: false
    };
    Trello.webhook.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

webhookRequest();