'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'members',
    includeBasic: [
        'search', 'searchField'
    ],

});
