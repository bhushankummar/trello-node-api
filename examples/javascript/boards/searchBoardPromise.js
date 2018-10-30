var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var boardRequest = async function () {
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
};

boardRequest();