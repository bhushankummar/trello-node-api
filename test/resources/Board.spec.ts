import {CONFIG} from '../intialize';
import * as TrelloNodeAPI from 'trello-node-api';

const apiKey = CONFIG.TRELLO_API_KEY;
const oauthToken = CONFIG.TRELLO_OAUTH_TOKEN;

const Trello = new TrelloNodeAPI();
Trello.setApiKey(apiKey);
Trello.setOauthToken(oauthToken);
/* tslint:disable:no-string-literal */
describe('Board', () => {

    it('It should create the Board', async () => {
        let data = {
            name: 'BOARD_NAME_1', // REQUIRED
            defaultLabels: false,
            defaultLists: false,
            desc: 'Board description.',
            idOrganization: 'ORGANIZATION_ID',
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
        let response = await Trello.board.create(data);
        console.log('response', response);
    });

});