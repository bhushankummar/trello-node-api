'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by trello-node
 */
function _Error(raw) {
    this.populate.apply(this, arguments);
    //this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
    this.type = type;
    this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Trello's REST API)
 */
var TrelloError = _Error.TrelloError = _Error.extend({
    type: 'TrelloError',
    populate: function (raw) {
        // Move from prototype def (so it appears in stringified obj)
        this.type = this.type;

        //this.stack = (new Error(raw.message)).stack;
        //this.rawType = raw.type;
        //this.code = raw.code;
        //this.param = raw.param;
        this.message = raw.message;
        //this.detail = raw.detail;
        //this.raw = raw;
        //this.headers = raw.headers;
        //this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
    }
});

/**
 * Helper factory which takes raw trello errors and outputs wrapping instances
 */
TrelloError.generate = function (rawTrelloError) {
    switch (rawTrelloError.type) {
        case 'invalid_request_error':
            return new _Error.TrelloInvalidRequestError(rawTrelloError);
        case 'api_error':
            return new _Error.TrelloAPIError(rawTrelloError);
    }
    return new _Error('Generic', rawTrelloError.message || 'Unknown Error');
};

_Error.TrelloInvalidRequestError = TrelloError.extend({type: 'TrelloInvalidRequestError'});
_Error.TrelloAPIError = TrelloError.extend({type: 'TrelloAPIError'});
_Error.TrelloAuthenticationError = TrelloError.extend({type: 'TrelloAuthenticationError'});
_Error.TrelloPermissionError = TrelloError.extend({type: 'TrelloPermissionError'});
_Error.TrelloRateLimitError = TrelloError.extend({type: 'TrelloRateLimitError'});
_Error.TrelloConnectionError = TrelloError.extend({type: 'TrelloConnectionError'});
_Error.TrelloSignatureVerificationError = TrelloError.extend({type: 'TrelloSignatureVerificationError'});
