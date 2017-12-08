var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var checklistRequest = function () {
    var id = 'CHECKLIST_ID'; // REQUIRED
    var data = {
        name: 'CHECKLIST_NAME',
        pos: 'top'
    };
    Trello.checklist.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

checklistRequest();