import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameDetail} from '../game-detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private dataService:DataService,
              private route:ActivatedRoute,
              private location:Location) { }
  public gameDetail: GameDetail;
  public gameID: GameDetail['gameID'];

  ngOnInit() {
    this.route.paramMap.subscribe(obj => this.gameID = obj.params.id);
    this.gameDetail = this.dataService.getGameDetails(this.gameID);
  }
}
