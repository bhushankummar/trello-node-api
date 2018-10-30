'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'lists',
    includeBasic: [
        'create', 'search', 'searchField', 'update'
    ]

});
