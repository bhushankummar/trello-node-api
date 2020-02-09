'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'cards',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ],

    setCustomField: trelloMethod({
        method: 'PUT',
        path: '/{idCard}/customField/{idCustomField}/item',
        urlParams: [ 'idCard', 'idCustomField' ]
    }),

    searchActions: trelloMethod({
        method: 'GET',
        path: '/{id}/actions',
        urlParams: [ 'id' ]
    }),

    searchAttachments: trelloMethod({
        method: 'GET',
        path: '/{id}/attachments',
        urlParams: [ 'id' ]
    }),

    searchAttachmentByAttachmentId: trelloMethod({
        method: 'GET',
        path: '/{id}/attachments/{idAttachment}',
        urlParams: [ 'id', 'idAttachment' ]
    }),

    searchBoard: trelloMethod({
        method: 'GET',
        path: '/{id}/board',
        urlParams: [ 'id' ]
    }),

    searchCheckItemStates: trelloMethod({
        method: 'GET',
        path: '/{id}/checkItemStates',
        urlParams: [ 'id' ]
    }),

    searchChecklists: trelloMethod({
        method: 'GET',
        path: '/{id}/checklists',
        urlParams: [ 'id' ]
    }),

    searchCheckItemByCheckItemId: trelloMethod({
        method: 'GET',
        path: '/{id}/checkItem/{idCheckItem}',
        urlParams: [ 'id', 'idCheckItem' ]
    }),

    searchCustomFieldItems: trelloMethod({
        method: 'GET',
        path: '/{id}/customFieldItems',
        urlParams: [ 'id' ]
    }),

    searchList: trelloMethod({
        method: 'GET',
        path: '/{id}/list',
        urlParams: [ 'id' ]
    }),

    searchMembers: trelloMethod({
        method: 'GET',
        path: '/{id}/members',
        urlParams: [ 'id' ]
    }),

    searchMembersVoted: trelloMethod({
        method: 'GET',
        path: '/{id}/membersVoted',
        urlParams: [ 'id' ]
    }),

    searchPluginData: trelloMethod({
        method: 'GET',
        path: '/{id}/pluginData',
        urlParams: [ 'id' ]
    }),

    searchStickers: trelloMethod({
        method: 'GET',
        path: '/{id}/stickers',
        urlParams: [ 'id' ]
    }),

    searchStickersByStickerId: trelloMethod({
        method: 'GET',
        path: '/{id}/stickers/{idSticker}',
        urlParams: [ 'id' ]
    })

});
