var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var trelloNode = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var boardRequest = function () {
    var data = {
        name: 'BOARD',
        defaultLabels: false,
        defaultLists: false,
        desc: 'Board description.',
        idOrganization: 'BOARD123456789',
        idBoardSource: 'BOARD123456789',
        keepFromSource: 'none',
        powerUps: 'all',
        prefs_permissionLevel: 'private',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_invitations: 'members',
        prefs_selfJoin: true,
        prefs_cardCovers: true,
        prefs_background: 'blue',
        prefs_cardAging: 'regular'
    };
    trelloNode.board.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

boardRequest();