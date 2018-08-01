import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameInfo } from '../game-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-games',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
  })
export class MyGamesComponent implements OnInit {
  constructor(private dataService:DataService, private route: ActivatedRoute) {
  }
  public gameList: GameInfo[];
  public thisPlayer: string;
  public otherPlayers: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
        const userID = params.id;
        this.gameList = this.dataService.getGameDetails(userID);
        console.log(this.gameList);
        this.thisPlayer = userID;
    });
  }

  getPlayerGist(playerList){
    return playerList.filter(player => ((player !== this.thisPlayer) && (player !== 'Bank')))
  }
}
