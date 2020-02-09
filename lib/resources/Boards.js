'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'boards',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ],

    searchCards: trelloMethod({
        method: 'GET',
        path: '/{id}/cards',
        urlParams: [ 'id' ]
    }),

    searchCardsFilter: trelloMethod({
        method: 'GET',
        path: '/{id}/cards/{filter}',
        urlParams: [ 'id', 'filter' ]
    }),

    searchChecklists: trelloMethod({
        method: 'GET',
        path: '/{id}/checklists',
        urlParams: [ 'id' ]
    }),

    searchCustomField: trelloMethod({
        method: 'GET',
        path: '/{id}/customFields',
        urlParams: [ 'id' ]
    }),

    searchLabels: trelloMethod({
        method: 'GET',
        path: '/{id}/customLabels',
        urlParams: [ 'id' ]
    }),

    searchLists: trelloMethod({
        method: 'GET',
        path: '/{id}/lists',
        urlParams: [ 'id' ]
    }),

    searchListsFilter: trelloMethod({
        method: 'GET',
        path: '/{id}/lists/{filter}',
        urlParams: [ 'id', 'filter' ]
    }),

    searchMembers: trelloMethod({
        method: 'GET',
        path: '/{id}/members',
        urlParams: [ 'id' ]
    }),

    searchMemberships: trelloMethod({
        method: 'GET',
        path: '/{id}/memberships',
        urlParams: [ 'id' ]
    }),

    searchPlugins: trelloMethod({
        method: 'GET',
        path: '/{id}/plugins',
        urlParams: [ 'id' ]
    }),

    searchCardsByCardId: trelloMethod({
        method: 'GET',
        path: '/{id}/cards/{idCard}',
        urlParams: [ 'id', 'idCard' ]
    })

});