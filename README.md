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
Are you finding a developer for your world-class product? If yes, please contact here. [Submit your project request here.](https://goo.gl/forms/UofdG5GY5iHMoUWg2)
Originally by [Bhushankumar L](mailto:bhushankumar.lilapara@gmail.com).

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

### Actions
#### Delete Action
```
    Trello.action.del('ACTION_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Action
```
    Trello.action.search('ACTION_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Action
```
    Trello.action.searchField('ACTION_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Action
```
    var id = 'ACTION_ID'; // REQUIRED
    var data = {
        text: 'TEXT' // REQUIRED
    };
    Trello.action.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Boards
#### Create Board
```
    var data = {
        name: 'BOARD_NAME', // REQUIRED
        defaultLabels: false,
        defaultLists: false,
        desc: 'Board description.',
        idOrganization: 'ORGANIZATION_ID',
        idBoardSource: 'BOARD_ID',
        keepFromSource: 'none',
        powerUps: 'all',
        prefs_permissionLevel: 'private',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_invitations: 'members',
        prefs_selfJoin: true,
        prefs_cardCovers: true,
        prefs_background: 'blue',
        prefs_cardAging: 'regular'
    };
    Trello.board.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Board
```
    Trello.board.del('BOARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Board
```
    Trello.board.search('BOARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Board Cards
```
    Trello.board.searchCards('BOARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Board Field
```
    var boardId = 'BOARD_ID';
    var field = 'shortUrl';
    Trello.board.searchField(boardId, field).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Board Promise
```
    const promises = [];
    const boardIds = ['BOARD_ID_1', 'BOARD_ID_2'];

    boardIds.forEach((boardId) => {
        promises.push(Trello.board.search(boardId));
    });

    try {
        const boards = await Promise.all(promises);
        console.log('boards ', boards);
    } catch (error) {
        console.error('[trello]', error);
    }    
```

#### Search Board With Filter
```
    var boardId = 'BOARD_ID';
    var fields = {
        actions: 'all'
    };
    Trello.board.search(boardId, fields).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Cards
```
    Trello.board.searchCards('BOARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Closed Cards
```
    Trello.board.searchCardsFilter('BOARD_ID', 'closed').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Board
```
    Trello.board.searchField('BOARD_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Board
```
    var id = 'BOARD_ID'; // REQUIRED
    var data = {
        name: 'BOARD',
        desc: 'Board descriptions',
        closed: false,
        subscribed: false,
        idOrganization: 'ORGANIZATION_ID',
        prefs_permissionLevel: 'private',
        prefs_selfJoin: true,
        prefs_cardCovers: true,
        prefs_invitations: 'members',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_background: 'blue',
        prefs_cardAging: 'regular',
        prefs_calendarFeedEnabled: false,
        labelNames_green: 'Test Label 1',
        labelNames_yellow: 'Test Label 2',
        labelNames_orange: 'Test Label 3',
        labelNames_red: 'Test Label 4',
        labelNames_purple: 'Test Label 5',
        labelNames_blue: 'Test Label 6'
    };
    Trello.board.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Cards
#### Create Card
```
    var data = {
        name: 'CARD_NAME',
        desc: 'Card description',
        pos: 'top',
        idList: 'LIST_ID', //REQUIRED
        due: null,
        dueComplete: false,
        idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
        idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
        urlSource: 'https://example.com',
        fileSource: 'file',
        idCardSource: 'CARD_ID',
        keepFromSource: 'attachments,checklists,comments,due,labels,members,stickers'
    };
    Trello.card.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Card
```
    Trello.card.del('CARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Card
```
    Trello.card.search('CARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Card
```
    Trello.card.searchField('CARD_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Card
```
    var id = 'CARD_ID'; // REQUIRED
    var data = {
        name: 'CARD_NAME_TEST',
        desc: 'Card description',
        closed: false,
        idMembers: 'MEMBER_ID,MEMBER_ID,MEMBER_ID',
        idAttachmentCover: null,
        idList: 'LIST_ID',
        idLabels: 'LABEL_ID, LABEL_ID, LABEL_ID',
        idBoard: false,
        pos: 'top',
        due: null,
        dueComplete: false,
        subscribed: false
    };
    Trello.card.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Checklists
#### Create Checklist
```
    var data = {
        idCard: 'CARD_ID', // REQUIRED
        name: 'CHECKLIST_NAME',
        pos: 1
    };
    Trello.checklist.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Checklist
```
    Trello.checklist.del('CHECKLIST_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Checklist
```
    Trello.checklist.search('CHECKLIST_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Checklist
```
    Trello.checklist.searchField('CHECKLIST_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Checklist
```
    var id = 'CHECKLIST_ID'; // REQUIRED
    var data = {
        name: 'CHECKLIST_NAME',
        pos: 'top'
    };
    Trello.checklist.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Enterprises
#### Search Enterprises
```
    Trello.enterprise.search('ENTERPRISE_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Labels
#### Create Label
```
    var data = {
        name: 'LABEL_NAME', // REQUIRED
        color: 'orange', // REQUIRED
        idBoard: 'BOARD_ID' // REQUIRED
    };
    Trello.label.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Label
```
    Trello.label.del('LABEL_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Label
```
    Trello.label.search('LABEL_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Label
```
    var id = 'LABEL_ID'; // REQUIRED
    var data = {
        name: 'NAME',
        color: 'orange'
    };
    Trello.label.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Lists
#### Create List
```
    var data = {
        name: 'LIST_NAME', // REQUIRED
        idBoard: 'BOARD_ID', // REQUIRED
        idListSource: 'LIST_ID',
        pos: 'top'
    };
    Trello.list.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field List
```
    Trello.list.searchField('LIST_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search List
```
    Trello.list.search('LIST_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update List
```
    var id = 'LIST_ID'; // REQUIRED
    var data = {
        name: 'LIST_NAME',
        closed: false,
        pos: 'top',
        subscribed: false
    };
    Trello.list.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Members
#### Search Field Member
```
    Trello.member.searchField('MEMBER_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Member
```
    Trello.member.search('MEMBER_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Member Boards
```
    Trello.member.searchBoards('me').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Notifications
#### Search Field Notification
```
    Trello.notification.searchField('NOTIFICATION_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Notification
```
    Trello.notification.search('NOTIFICATION_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Notification
```
    var id = 'NOTIFICATION_ID'; // REQUIRED
    var data = {
        unread: false
    };
    Trello.notification.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Organizations
#### Create Organization
```
    var data = {
        displayName: 'ORGANIZATION_NAME', // REQUIRED
        desc: 'Organization description',
        name: 'NAME',
        website: 'https://example.com'
    };
    Trello.organization.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Organization
```
    Trello.organization.del('ORGANIZATION_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Organization
```
    Trello.organization.searchField('ORGANIZATION_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Organization
```
    Trello.organization.search('ORGANIZATION_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Organization
```
    var id = 'ORGANIZATION_ID'; // REQUIRED
    var data = {
        name: 'or123',
        displayName: 'ORGANIZATION_DISPLAY_NAME',
        desc: 'Organization descriptions',
        website: 'https://example.com',
        prefs_associatedDomain: 'trello.com',
        prefs_externalMembersDisabled: false,
        prefs_googleAppsVersion: 1,
        prefs_boardVisibilityRestrict_org: 'none',
        prefs_boardVisibilityRestrict_private: 'none',
        prefs_boardVisibilityRestrict_public: 'none',
        prefs_orgInviteRestrict: '*.test.com',
        prefs_permissionLevel: 'public'
    };
    Trello.organization.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

### Webhooks
#### Create Webhook
```
    var data = {
        description: 'Webhook description',
        callbackURL: 'https://mycallbackurl.com/', // REQUIRED
        idModel: 'MODEL_ID', // REQUIRED
        active: false
    };
    Trello.webhook.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Delete Webhook
```
    Trello.webhook.del('WEBHOOK_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Field Webhook
```
    Trello.webhook.searchField('WEBHOOK_ID', 'FIELD_NAME').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Search Webhook
```
    Trello.webhook.search('WEBHOOK_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

#### Update Webhook
```
    var id = 'WEBHOOK_ID'; // REQUIRED
    var data = {
        displayName: 'ORGANIZATION_DISPLAY_NAME',
        description: 'Webhook descriptions',
        callbackURL: 'https://mycallbackurl.com/',
        idModel: 'MODEL_ID',
        active: false
    };
    Trello.webhook.update(id, data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });    
```

