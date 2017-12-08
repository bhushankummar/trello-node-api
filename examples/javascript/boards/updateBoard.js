var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var boardRequest = function () {
    var id = 'BOARD_ID'; // REQUIRED
    var data = {
        name: 'BOARD',
        desc: 'Board descriptions',
        closed: false,
        subscribed: false,
        idOrganization: 'ORGANIZATION_ID',
        prefs_permissionLevel: 'private',
        prefs_selfJoin: true,
        prefs_cardCovers: true,
        prefs_invitations: 'members',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_background: 'blue',
        prefs_cardAging: 'regular',
        prefs_calendarFeedEnabled: false,
        labelNames_green: 'Test Label 1',
        labelNames_yellow: 'Test Label 2',
        labelNames_orange: 'Test Label 3',
        labelNames_red: 'Test Label 4',
        labelNames_purple: 'Test Label 5',
        labelNames_blue: 'Test Label 6'
    };
    Trello.board.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

boardRequest();