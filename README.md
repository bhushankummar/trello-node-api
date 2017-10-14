# trello-node-api (Trello REST API)

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

## Development

Run the installation:

```bash
$ npm install
```


## Configuration

Set your API Key and Secret/Oauth Token.

```js
var trelloNode = require('trello-node-api')(apiKey, oauthToken);
```


Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).