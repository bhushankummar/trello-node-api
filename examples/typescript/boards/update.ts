const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let boardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'BOARD_ID';
    let data = {
        name: 'BOARD_TEST',
        desc: 'Board descriptions',
        closed: false,
        subscribed: false,
        idOrganization: '',
        prefs_permissionLevel: 'private',
        prefs_selfJoin: true,
        prefs_cardCovers: true,
        prefs_invitations: 'members',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_background: 'blue',
        prefs_cardAging: 'regular',
        prefs_calendarFeedEnabled: false,
        labelNames_green: '',
        labelNames_yellow: '',
        labelNames_orange: '',
        labelNames_red: '',
        labelNames_purple: '',
        labelNames_blue: ''
    };
    let response = await Trello.board.update(id, data).catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

boardRequest();