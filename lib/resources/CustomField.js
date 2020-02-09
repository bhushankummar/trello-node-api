"use strict";

var TrelloResource = require("../TrelloResource");
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({
  path: "card",
  includeBasic: [],

  setCustomField: trelloMethod({
    method: "PUT",
    path: "/{idCard}/customField/{idCustomField}/item",
    urlParams: ["idCard", "idCustomField"]
  })
});
