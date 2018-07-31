import { Injectable } from '@angular/core';
import { GameDetail, GameInfo } from './game-detail';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userBoard: GameInfo[] = null;
  gameInfo: GameDetail = new GameDetail();
  userList: String[] = [];

  getBoardDetails(id): GameInfo[] {
   this.userBoard = []
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
        playerID: 'kavi5712',
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
    this.gameInfo.banker = 'kavi5712';
    this.gameInfo.logs = [{
      from: 'Bank',
      to: 'Priya',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    },
    {
      from: 'Bank',
      to: 'kavi5712',
      amount: 1500,
      timestamp : new Date('2018-08-09')
    }];
    return this.gameInfo;
  }

  checkAvailability(userID: String): Promise<Boolean> {
    const response = new Promise<Boolean>((resolve, reject) => {
      if ((userID === '') || (userID === undefined)) {
        reject('UserID cannot be empty');
      }
      else{
        resolve(true);
      }
    });
    return response;
  }

  createProfile(userID: String): Promise<Boolean> {
      const response = new Promise<Boolean>((resolve, reject) => {
          setTimeout(() => {
          this.userList.push(userID);
          resolve(true);
          }, 2000);
      });
      return response;
  }
}
