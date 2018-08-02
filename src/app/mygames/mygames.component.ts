import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameInfo } from '../game-detail';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';

@Component({
  selector: 'my-games',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
  })
export class MyGamesComponent implements OnInit {
  constructor(private dataService:DataService, private route: ActivatedRoute, private loginService: LoginService) {
  }
  public gameList: GameInfo[];
  public thisPlayer: string;
  public otherPlayers: string;
  public userData: SocialUser;

  ngOnInit() {
    this.route.params.subscribe(params => {
        const userID = params.id;
        this.gameList = this.dataService.getGameDetails(userID);
        this.loginService.getUser().subscribe((userData) => {this.userData = userData;});
        console.log(this.gameList);
        this.thisPlayer = userID;
    });
  }

  getPlayerGist(playerList){
    return playerList.filter(player => ((player !== this.thisPlayer) && (player !== 'Bank')));
  }
}
