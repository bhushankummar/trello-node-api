var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var labelRequest = function () {
    var id = 'LABEL_ID'; // REQUIRED
    var data = {
        name: 'NAME',
        color: 'orange'
    };
    Trello.label.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

labelRequest();