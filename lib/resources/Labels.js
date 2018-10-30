'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'labels',
    includeBasic: [
        'create', 'search', 'update', 'del'
    ]

});
