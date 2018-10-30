'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'actions',
    includeBasic: [
        'search', 'searchField', 'update', 'del'
    ]

});
