// Type definitions for trello-node-api


/**
 *
 */
declare namespace trelloNodeApi {

    interface board {
        search(value: string);
    }

    function setApiKey(value: string);

    function setOauthToken(value: string);
}

export = trelloNodeApi;
