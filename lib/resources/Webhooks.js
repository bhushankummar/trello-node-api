'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'webhooks',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ]

});
