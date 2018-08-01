export class GameData {
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
    active_since: Date;
    gameID: string;
    active: boolean;
    players: string[];
}
