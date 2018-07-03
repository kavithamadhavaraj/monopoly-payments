import { Injectable } from '@angular/core';
import { Player, GameDetail, GameInfo } from './game-detail';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userBoard: GameInfo[] = [];
  gameInfo: GameDetail = new GameDetail();


  getBoardDetails(): GameInfo[] {
   this.userBoard.push({
      status: 'On-going',
      gameID: 'ID113',
      expiry: new Date('2018-08-10')
    });
    this.userBoard.push({
      status: 'Completed',
      gameID: 'ID123',
      expiry: new Date('2018-03-10')
    });
    this.userBoard.push({
      status: 'Completed',
      gameID: 'ID143',
      expiry: new Date('2018-02-15')
    });
    return this.userBoard;
  }

  getGameDetails(gameID: string): GameDetail {
    this.gameInfo.gameInfo = {
      status: 'On-going',
      gameID: gameID,
      expiry: new Date('2018-08-10')
    };
    
    this.gameInfo.players = [{
        playerID: 'Kavitha',
        balance: 200
      },
      {
        playerID: 'Priya',
        balance: 250
      },
      {
        playerID: 'Bank',
        balance: 2500
      }
    ];
    this.gameInfo.banker = 'Kavitha';
    this.gameInfo.logs = [{
      from: 'Bank',
      to: 'Priya',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    },
    {
      from: 'Bank',
      to: 'Kavitha',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    }];
    return this.gameInfo;
  }
}
