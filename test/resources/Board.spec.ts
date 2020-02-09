import { CONFIG } from '../initialize';
// @ts-ignore
import * as TrelloNodeAPI from '../../lib/trello-node-api';

import * as chai from 'chai';

const expect = chai.expect;

const apiKey = CONFIG.TRELLO_API_KEY;
const oauthToken = CONFIG.TRELLO_OAUTH_TOKEN;

const Trello = new TrelloNodeAPI();
Trello.setApiKey(apiKey);
Trello.setOauthToken(oauthToken);

let boardDocument: any = {};
describe('Board', function () {

    before(function () {
        expect(apiKey).to.be.a('string');
        expect(oauthToken).to.be.a('string');
    });

    it('It should create the Board', async function () {
        const boardName = 'Auto generated board ' + new Date().getUTCMilliseconds();
        let data = {
            name: boardName, // REQUIRED
            defaultLabels: false,
            defaultLists: false,
            desc: 'This is test board. Here is the Board description.',
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
        try {
            let response = await Trello.board.create(data);
            console.log('response', response);
            boardDocument = response;
            expect(response).to.be.a('object');
        } catch (error) {
            console.log('error ', error);
            expect(error).to.be.undefined;
        }
    });

    it('It should delete the Board', async function () {
        try {
            let response = await Trello.board.del(boardDocument.id);
            console.log('response', response);
            expect(response).to.be.a('object');
        } catch (error) {
            console.log('error ', error);
            expect(error).to.be.undefined;
        }
    });
});