import { Injectable } from '@angular/core';
import {BoardDetail} from './board-detail';
import { Player, GameDetail } from './game-detail';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  boardInfo: BoardDetail[] = [];
  gameInfo: GameDetail = new GameDetail();


  getBoardDetails(): BoardDetail[] {
   this.boardInfo.push({
      status: 'On-going',
      gameID: 'ID113',
      expiry: new Date('2018-08-10')
    });
    this.boardInfo.push({
      status: 'Completed',
      gameID: 'ID123',
      expiry: new Date('2018-03-10')
    });
    this.boardInfo.push({
      status: 'Completed',
      gameID: 'ID143',
      expiry: new Date('2018-02-15')
    });
    return this.boardInfo;
  }

  getGameDetails(gameID: string): GameDetail {
    this.gameInfo.gameID = gameID;
    this.gameInfo.status = 'On-going';
    this.gameInfo.expiry = new Date('2018-08-10');
    this.gameInfo.players = [{
        playerID: 'P123',
        name: 'Kavitha',
        balance: 200
      },
      {
        playerID: 'P124',
        name: 'Priya',
        balance: 250
      }
    ];
    this.gameInfo.banker = 'P124';
    this.gameInfo.logs = [{
      from: 'Bank',
      to: 'P124',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    },
    {
      from: 'Bank',
      to: 'P123',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    }];
    return this.gameInfo;
  }
}
