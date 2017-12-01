// Type definitions for trello-node-api

declare class trelloNodeApi {

    constructor()

    constructor(key: string, token: string);

    setApiKey(value: string);

    setOauthToken(value: string);

    board: TrelloBoard;

}

declare class TrelloBoard {
    search(value: string): Promise<any>;
}

export class TrelloError extends Error {
    constructor(message: string);

    static create(options: Object): TrelloError;

    code?: number;
}

export = trelloNodeApi;