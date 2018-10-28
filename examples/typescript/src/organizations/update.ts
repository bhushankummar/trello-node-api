const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let organizationRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'ORGANIZATION_ID'; // REQUIRED
    let data = {
        name: 'or123',
        displayName: 'ORGANIZATION_DISPLAY_NAME',
        desc: 'Organization descriptions',
        website: 'https://example.com',
        prefs_associatedDomain: 'trello.com',
        prefs_externalMembersDisabled: false,
        prefs_googleAppsVersion: 1,
        prefs_boardVisibilityRestrict_org: 'none',
        prefs_boardVisibilityRestrict_private: 'none',
        prefs_boardVisibilityRestrict_public: 'none',
        prefs_orgInviteRestrict: '*.test.com',
        prefs_permissionLevel: 'public'
    };
    let response;
    try {
        response = await Trello.organization.update(id, data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
};

organizationRequest();
