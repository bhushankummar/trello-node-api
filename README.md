# trello-node-api (Trello REST API)
[![Version](https://img.shields.io/npm/v/trello-node-api.svg)](https://www.npmjs.org/package/trello-node-api)
[![Build Status](https://travis-ci.org/bhushankumarl/trello-node-api.svg?branch=master)](https://travis-ci.org/bhushankumarl/trello-node-api)

This API supported Trello's standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (https://developers.trello.com/v1.0/reference)

You can find [examples here](https://github.com/bhushankumarl/trello-node-api/tree/master/examples). This will help you for faster implmentation of Trello's.

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback !
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.
##### Please Feel free to create Issue for any help !
##### All developers/contributors are requested to open Pull Request/Merge Request on development branch. Please make sure Test Cases be passed.

## Installation
```bash
npm install trello-node-api --save
```

## Debugging

```bash
export DEBUG=TA:*
```

## Configuration

Set your API Key and Secret/Oauth Token.

```js
var trelloNode = require('trello-node-api')(apiKey, oauthToken);
```

## Configuration Using TypeScript
```typescript
import * as TrelloNodeAPI from 'trello-node-api';

const trello = new TrelloNodeAPI();
trello.setApiKey('apiKey');
trello.setOauthToken('oauthToken');
```

## Pull Request
- Contributors can send their Pull Request to `development` branch.
- Kindly validate test cases & linting before opening new PR.

## Do you need an expert?
Are you finding a developer for your word class product? If yes, please contact here. [Submit your project request here.](https://goo.gl/forms/UofdG5GY5iHMoUWg2)
```
Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).
```

## Examples

#### [Actions](https://github.com/bhushankumarl/trello-node-api/wiki/Actions-TypeScript)

#### [Boards](https://github.com/bhushankumarl/trello-node-api/wiki/Boards-TypeScript)

#### [Cards](https://github.com/bhushankumarl/trello-node-api/wiki/Cards-TypeScript)

#### [Checklists](https://github.com/bhushankumarl/trello-node-api/wiki/Checklists-TypeScript)

#### [Enterprises](https://github.com/bhushankumarl/trello-node-api/wiki/Enterprises-TypeScript)

#### [Labels](https://github.com/bhushankumarl/trello-node-api/wiki/Labels-TypeScript)

#### [Lists](https://github.com/bhushankumarl/trello-node-api/wiki/Lists-TypeScript)

#### [Members](https://github.com/bhushankumarl/trello-node-api/wiki/Members-TypeScript)

#### [Notifications](https://github.com/bhushankumarl/trello-node-api/wiki/Notifications-TypeScript)

#### [Organizations](https://github.com/bhushankumarl/trello-node-api/wiki/Organizations-TypeScript)

#### [Webhooks](https://github.com/bhushankumarl/trello-node-api/wiki/Webhooks-TypeScript)