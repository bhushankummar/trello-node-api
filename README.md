# trello-node-api (Trello REST API)
[![Build Status](https://travis-ci.org/bhushankumarl/trello-node-api.svg?branch=master)](https://travis-ci.org/bhushankumarl/trello-node-api)

This API supported Trello's standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (https://developers.trello.com/v1.0/reference)

You can find [examples here](https://github.com/bhushankumarl/trello-node-api/tree/master/examples). This will help you for faster implmentation of Trello's.

## Installation
```bash
$ npm install trello-node-api --save
```

## Debugging

Run the DEBUG:

```bash
$ export DEBUG=TA:*
```

## Configuration

Set your API Key and Secret/Oauth Token.

```js
var trelloNode = require('trello-node-api')(apiKey, oauthToken);
```

##### It does supports Standard Endpoints of Action, Boards, Cards, Checklists, Enterprises, Labels, Lists, Members, Notifications, Organizations, Webhooks

##### It does supports EcmaScript 5, EcmaScript 6, TypeScript, async-await, Promises, Callback !

##### Please Feel free to create Issue for any help !

Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).
