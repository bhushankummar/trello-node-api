'use strict';

var http = require('http');
var https = require('https');
var path = require('path');
var Debug = require('debug');

var utils = require('./utils');
var Error = require('./Error');

var hasOwn = {}.hasOwnProperty;
var debug = Debug('TA:TrelloResource.js');
// Provide extension mechanism for Trello Resource Sub-Classes
TrelloResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
TrelloResource.method = require('./TrelloMethod');
TrelloResource.BASIC_METHODS = require('./TrelloMethod.basic');

/**
 * Encapsulates request logic for a Trello Resource
 */
function TrelloResource(trello, urlData) {
    this._trello = trello;
    this._urlData = urlData || {};

    this.basePath = utils.makeURLInterpolator(trello.getApiField('basePath'));
    this.resourcePath = this.path;
    this.path = utils.makeURLInterpolator(this.path);

    if (this.includeBasic) {
        this.includeBasic.forEach(function (methodName) {
            this[methodName] = TrelloResource.BASIC_METHODS[methodName];
        }, this);
    }

    this.initialize.apply(this, arguments);
}

TrelloResource.prototype = {

    path: '',

    initialize: function () {
    },

    // Function to override the default data processor. This allows full control
    // over how a TrelloResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,

    // String that overrides the base API endpoint. If `overrideHost` is not null
    // then all requests for a particular resource will be sent to a base API
    // endpoint as defined by `overrideHost`.
    overrideHost: null,

    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,

    createFullPath: function (commandPath, urlData) {
        return path.join(
          this.basePath(urlData),
          this.path(urlData),
          typeof commandPath == 'function' ?
            commandPath(urlData) : commandPath
        ).replace(/\\/g, '/'); // ugly workaround for Windows
    },

    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols: function (pathWithSymbols) {
        return '/' + path.join(
          this.resourcePath,
          pathWithSymbols
        ).replace(/\\/g, '/'); // ugly workaround for Windows
    },

    createUrlData: function () {
        var urlData = {};
        // Merge in baseData
        for (var i in this._urlData) {
            if (hasOwn.call(this._urlData, i)) {
                urlData[i] = this._urlData[i];
            }
        }
        return urlData;
    },

    wrapTimeout: function (promise, callback) {
        if (callback) {
            // Ensure callback is called outside of promise stack.
            return promise.then(function (res) {
                setTimeout(function () {
                    callback(null, res);
                }, 0);
            }, function (err) {
                setTimeout(function () {
                    callback(err, null);
                }, 0);
            });
        }

        return promise;
    },

    _timeoutHandler: function (timeout, req, callback) {
        var self = this;
        return function () {
            var timeoutErr = new Error('ETIMEDOUT');
            timeoutErr.code = 'ETIMEDOUT';

            req._isAborted = true;
            req.abort();

            callback.call(
              self,
              new Error.TrelloConnectionError({
                  message: 'Request aborted due to timeout being reached (' + timeout + 'ms)',
                  detail: timeoutErr
              }),
              null
            );
        };
    },

    _responseHandler: function (req, callback) {
        var self = this;
        return function (res) {
            var response = '';

            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                response += chunk;
            });
            res.on('end', function () {
                var headers = res.headers || {};
                // NOTE: Trello responds with lowercase header names/keys.

                // For convenience, make Request-Id easily accessible on
                // lastResponse.
                //res.requestId = headers['request-id'];

                var responseEvent = utils.removeEmpty({
                    api_version: headers['trello-version'],
                    account: headers['trello-account'],
                    method: req._requestEvent.method,
                    path: req._requestEvent.path,
                    status: res.statusCode,
                    //request_id: res.requestId,
                    elapsed: Date.now() - req._requestStart
                });

                //console.log('responseEvent ', responseEvent);
                self._trello._emitter.emit('response', responseEvent);
                try {

                    if (responseEvent.status !== 200) {
                        //console.log('Inside error');
                        var message = response;
                        response = {};
                        response.error = {};
                        var err;

                        response.error.message = message;
                        //response.error.headers = headers;
                        response.error.statusCode = res.statusCode;
                        //response.error.requestId = res.requestId;

                        if (res.statusCode === 401) {
                            err = new Error.TrelloAuthenticationError(response.error);
                        } else if (res.statusCode === 403) {
                            err = new Error.TrelloPermissionError(response.error);
                        } else if (res.statusCode === 429) {
                            err = new Error.TrelloRateLimitError(response.error);
                        } else {
                            err = Error.TrelloError.generate(response.error);
                        }
                        return callback.call(self, err, null);
                    } else {
                        // Assuming it is success response.
                        response = JSON.parse(response);
                    }
                } catch (e) {
                    return callback.call(
                      self,
                      new Error.TrelloAPIError({
                          message: 'Invalid JSON received from the Trello API',
                          response: response,
                          exception: e,
                          requestId: headers['request-id']
                      }),
                      null
                    );
                }
                // Expose res object
                Object.defineProperty(response, 'lastResponse', {
                    enumerable: false,
                    writable: false,
                    value: res
                });
                callback.call(self, null, response);
            });
        };
    },

    _errorHandler: function (req, callback) {
        var self = this;
        return function (error) {
            if (req._isAborted) {
                // already handled
                return;
            }
            callback.call(
              self,
              new Error.TrelloConnectionError({
                  message: 'An error occurred with our connection to Trello',
                  detail: error
              }),
              null
            );
        };
    },

    _defaultHeaders: function (auth, contentLength, apiVersion) {
        var userAgentString = 'Trello/v1 NodeBindings/' + this._trello.getConstant('PACKAGE_VERSION');

        if (this._trello._appInfo) {
            userAgentString += ' ' + this._trello.getAppInfoAsString();
        }

        var headers = {
            // Use specified auth token or use default from this trello instance:
            'Authorization': auth ?
              'Bearer ' + auth :
              this._trello.getApiField('auth'),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contentLength,
            'User-Agent': userAgentString
        };

        if (apiVersion) {
            headers['Trello-Version'] = apiVersion;
        }

        return headers;
    },

    _request: function (method, path, data, auth, options, callback) {
        var self = this;
        var requestData;

        debug('data ', data);
        if (self.requestDataProcessor) {
            requestData = self.requestDataProcessor(method, data, options.headers);
        } else {
            requestData = utils.stringifyRequestData(data || {});
        }

        var apiVersion = this._trello.getApiField('version');
        var token = this._trello.getApiField('token');
        var apiKey = this._trello.getApiField('api-key');
        path += '?key=' + apiKey;
        path += '&token=' + token;
        var headers = self._defaultHeaders(auth, requestData.length, apiVersion);

        // Grab client-user-agent before making the request:
        this._trello.getClientUserAgent(function (cua) {
            headers['X-Trello-Client-User-Agent'] = cua;

            if (options.headers) {
                Object.assign(headers, options.headers);
            }

            makeRequest();
        });

        function makeRequest() {
            var timeout = self._trello.getApiField('timeout');
            var isInsecureConnection = self._trello.getApiField('protocol') == 'http';

            var host = self.overrideHost || self._trello.getApiField('host');
            //console.log('path ', path);

            var options = {
                host: host,
                port: self._trello.getApiField('port'),
                path: path,
                method: method,
                agent: self._trello.getApiField('agent'),
                headers: headers,
                ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5'
            };
            var req = (
              isInsecureConnection ? http : https
            ).request(options);

            debug('options ', options);

            var requestEvent = utils.removeEmpty({
                api_version: apiVersion,
                method: method,
                path: path
            });

            req._requestEvent = requestEvent;

            req._requestStart = Date.now();

            self._trello._emitter.emit('request', requestEvent);

            req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
            req.on('response', self._responseHandler(req, callback));
            req.on('error', self._errorHandler(req, callback));

            req.on('socket', function (socket) {
                socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function () {
                    // Send payload; we're safe:
                    req.write(requestData);

                    req.end();
                });
            });
        }
    }

};

module.exports = TrelloResource;
