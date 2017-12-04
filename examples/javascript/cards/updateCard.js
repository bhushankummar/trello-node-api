var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var cardRequest = function () {
    var id = 'CARD_ID';
    var data = {
        name: 'CARD_NAME',
        desc: 'Card Description',
        closed: false,
        idMembers: false,
        idAttachmentCover: false,
        idList: false,
        idLabels: false,
        idBoard: false,
        pos: 'top',
        due: null,
        dueComplete: false,
        subscribed: false,
    };

    Trello.card.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

cardRequest();