var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var webhookRequest = function () {
    var id = 'WEBHOOK_ID'; // REQUIRED
    var data = {
        displayName: 'ORGANIZATION_DISPLAY_NAME',
        description: 'Webhook descriptions',
        callbackURL: 'https://mycallbackurl.com/',
        idModel: 'MODEL_ID',
        active: false
    };
    Trello.webhook.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

webhookRequest();