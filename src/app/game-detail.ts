export class GameDetail {
    expiry: Date;
    gameID: string;
    status: string;
    logs: Transaction[];
    players: Player[];
    banker: Player['name'];
}

export class Transaction {
    from: Player['name'];
    to: Player['name'];
    amount: number;
    timestamp: Date;
}

export class Player {
    name: string;
    playerID: string;
    balance: number;
}
