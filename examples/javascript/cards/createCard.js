var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var cardRequest = function () {
    var data = {
        name: 'CARD_NAME',
        desc: 'Card description',
        pos: 'top',
        due: false,
        dueComplete: false,
        idList: 'LIST_ID', //required
        idMembers: false,
        idLabels: '',
        urlSource: '',
        fileSource: '',
        idCardSource: '',
        keepFromSource: false,

    };
    var testData = {
        name: 'CARD_NAME',
        idList: 'LIST_ID',
    };
    Trello.card.create(testData).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

cardRequest();