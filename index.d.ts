// Type definitions for trello-node-api

class BasicMethod {

    create(params: any): Promise<any>;

    search(value: string): Promise<any>;

    searchField(boardId: string, fieldName: string): Promise<any>;

    update(boardId: string, params: any): Promise<any>;

    del(boardId: string): Promise<any>;
}

declare class TrelloAction {

    search(value: string): Promise<any>;

    searchField(boardId: string, fieldName: string): Promise<any>;

    update(boardId: string, params: any): Promise<any>;

    del(boardId: string): Promise<any>;

}

declare class TrelloBoard extends BasicMethod {

}

declare class TrelloCard extends BasicMethod {

}

declare class TrelloChecklist extends BasicMethod {

}

declare class TrelloEnterprise {

}

declare class TrelloLabel {

    create(params: any): Promise<any>;

    search(value: string): Promise<any>;

    update(boardId: string, params: any): Promise<any>;

    del(boardId: string): Promise<any>;

}

declare class TrelloList {

}

declare class TrelloMember {

}

declare class TrelloNotification {

}

declare class TrelloOrganization extends BasicMethod {

}

declare class TrelloWebhook extends BasicMethod {

}


declare class TrelloNodeApi {

    constructor()

    constructor(key: string, token: string);

    setApiKey(key: string);

    setOauthToken(token: string);

    action: TrelloAction;
    board: TrelloBoard;
    card: TrelloCard;
    checklist: TrelloChecklist;
    enterprise: TrelloEnterprise;
    label: TrelloLabel;
    list: TrelloList;
    member: TrelloMember;
    notification: TrelloNotification;
    organization: TrelloOrganization;
    webhook: TrelloWebhook;

}


export class TrelloError extends Error {
    constructor(message: string);

    static create(options: Object): TrelloError;

    code?: number;
}

declare namespace TrelloNodeApi {

}
export = TrelloNodeApi;