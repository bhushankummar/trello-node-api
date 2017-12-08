var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var organizationsRequest = function () {
    var id = 'ORGANIZATION_ID'; // REQUIRED
    var data = {
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
    Trello.organization.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

organizationsRequest();