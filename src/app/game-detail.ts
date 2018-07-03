export class GameDetail {
    gameInfo: GameInfo;
    logs: Transaction[];
    players: Player[];
    banker: string;
}

export class Transaction {
    from: string;
    to: string;
    amount: number;
    timestamp: Date;
}

export class Player {
    playerID: string;
    balance: number;
}

export class GameInfo {
    expiry: Date;
    gameID: string;
    status: string;
}
