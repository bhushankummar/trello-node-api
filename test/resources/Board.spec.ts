const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();
Trello.setApiKey(apiKey);
Trello.setOauthToken(oauthToken);
import {mocha} from 'mocha'
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
        let response = await Trello.board.create(data).catch(error => {
            if (error) {
                console.log('error ', error);
                return;
            }
        });
        console.log('response', response);
    });

});