const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let boardRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'BOARD_ID'; // REQUIRED
    let data = {
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
    let response;
    try {
        response = await Trello.board.update(id, data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

boardRequest();
