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
    })

});
