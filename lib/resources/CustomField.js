'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({
    path: 'customfields',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ]

});
