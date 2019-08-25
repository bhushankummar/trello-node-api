'use strict';

TrelloNodeApi.DEFAULT_HOST = 'api.trello.com';
TrelloNodeApi.DEFAULT_PORT = '443';
TrelloNodeApi.DEFAULT_BASE_PATH = '/1/';
TrelloNodeApi.DEFAULT_API_VERSION = null;

// Use node's default timeout:
TrelloNodeApi.DEFAULT_TIMEOUT = require('http').createServer().timeout;

TrelloNodeApi.PACKAGE_VERSION = require('../package.json').version;

TrelloNodeApi.USER_AGENT = {
    bindings_version: TrelloNodeApi.PACKAGE_VERSION,
    lang: 'node',
    lang_version: process.version,
    platform: process.platform,
    publisher: 'TrelloNodeApi',
    uname: null
};

TrelloNodeApi.USER_AGENT_SERIALIZED = null;

var APP_INFO_PROPERTIES = ['name', 'version', 'url'];

var EventEmitter = require('events').EventEmitter;
var exec = require('child_process').exec;

var resources = {
    Action: require('./resources/Actions'),
    Board: require('./resources/Boards'),
    Card: require('./resources/Cards'),
    Checklist: require('./resources/Checklists'),
    CustomField: require('./resources/CustomField'),
    Enterprise: require('./resources/Enterprises'),
    Label: require('./resources/Labels'),
    List: require('./resources/Lists'),
    Member: require('./resources/Members'),
    Notification: require('./resources/Notifications'),
    Organization: require('./resources/Organizations'),
    Webhook: require('./resources/Webhooks')
};

TrelloNodeApi.TrelloNodeApiResource = require('./TrelloResource');
TrelloNodeApi.resources = resources;

function TrelloNodeApi(key, token) {
    if (!(this instanceof TrelloNodeApi)) {
        return new TrelloNodeApi(key, token);
    }

    Object.defineProperty(this, '_emitter', {
        value: new EventEmitter(),
        enumerable: false,
        configurable: false,
        writeable: false
    });

    this.on = this._emitter.on.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);

    this._api = {
        auth: null,
        host: TrelloNodeApi.DEFAULT_HOST,
        port: TrelloNodeApi.DEFAULT_PORT,
        basePath: TrelloNodeApi.DEFAULT_BASE_PATH,
        version: TrelloNodeApi.DEFAULT_API_VERSION,
        timeout: TrelloNodeApi.DEFAULT_TIMEOUT,
        agent: null,
        dev: false
    };

    this._prepResources();
    this.setApiKey(key);
    this.setApiVersion(1);
    this.setOauthToken(token);

    this.webhooks = require('./Webhooks');
}

TrelloNodeApi.prototype = {

    setHost: function (host, port, protocol) {
        this._setApiField('host', host);
        if (port) {
            this.setPort(port);
        }
        if (protocol) {
            this.setProtocol(protocol);
        }
    },

    setProtocol: function (protocol) {
        this._setApiField('protocol', protocol.toLowerCase());
    },

    setPort: function (port) {
        this._setApiField('port', port);
    },

    setApiVersion: function (version) {
        if (version) {
            this._setApiField('version', version);
        }
    },

    setOauthToken: function (token) {
        if (token) {
            this._setApiField(
              'token', token
            );
        }
    },

    setApiKey: function (key) {
        if (key) {
            this._setApiField(
              'api-key', key
            );
        }
    },

    setTimeout: function (timeout) {
        this._setApiField(
          'timeout',
          timeout == null ? TrelloNodeApi.DEFAULT_TIMEOUT : timeout
        );
    },

    setAppInfo: function (info) {
        if (info && typeof info !== 'object') {
            throw new Error('AppInfo must be an object.');
        }

        if (info && !info.name) {
            throw new Error('AppInfo.name is required');
        }

        info = info || {};

        var appInfo = APP_INFO_PROPERTIES.reduce(function (accum, prop) {
            if (typeof info[prop] == 'string') {
                accum = accum || {};

                accum[prop] = info[prop];
            }

            return accum;
        }, undefined);

        // Kill the cached UA string because it may no longer be valid
        TrelloNodeApi.USER_AGENT_SERIALIZED = undefined;

        this._appInfo = appInfo;
    },

    setHttpAgent: function (agent) {
        this._setApiField('agent', agent);
    },

    _setApiField: function (key, value) {
        this._api[key] = value;
    },

    getApiField: function (key) {
        return this._api[key];
    },

    getConstant: function (c) {
        return TrelloNodeApi[c];
    },

    // Gets a JSON version of a User-Agent and uses a cached version for a slight
    // speed advantage.
    getClientUserAgent: function (cb) {
        if (TrelloNodeApi.USER_AGENT_SERIALIZED) {
            return cb(TrelloNodeApi.USER_AGENT_SERIALIZED);
        }
        this.getClientUserAgentSeeded(TrelloNodeApi.USER_AGENT, function (cua) {
            TrelloNodeApi.USER_AGENT_SERIALIZED = cua;
            cb(TrelloNodeApi.USER_AGENT_SERIALIZED);
        });
    },

    // Gets a JSON version of a User-Agent by encoding a seeded object and
    // fetching a uname from the system.
    getClientUserAgentSeeded: function (seed, cb) {
        var self = this;

        exec('uname -a', function (err, uname) {
            var userAgent = {};
            for (var field in seed) {
                userAgent[field] = encodeURIComponent(seed[field]);
            }

            // URI-encode in case there are unusual characters in the system's uname.
            userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

            if (self._appInfo) {
                userAgent.application = self._appInfo;
            }

            cb(JSON.stringify(userAgent));
        });
    },

    getAppInfoAsString: function () {
        if (!this._appInfo) {
            return '';
        }

        var formatted = this._appInfo.name;

        if (this._appInfo.version) {
            formatted += '/' + this._appInfo.version;
        }

        if (this._appInfo.url) {
            formatted += ' (' + this._appInfo.url + ')';
        }

        return formatted;
    },

    _prepResources: function () {
        for (var name in resources) {
            this[
            name[0].toLowerCase() + name.substring(1)
              ] = new resources[name](this);
        }
    }

};

module.exports = TrelloNodeApi;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.TrelloNodeApi = TrelloNodeApi;
