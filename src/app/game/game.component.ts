import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameData} from '../game-detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})

export class GameComponent implements OnInit {
  public gameDetail: GameData;
  public gameID: string;
  public context: string;
  public thisPlayer: string;
  private pathObj: any;
  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(obj => {
      this.pathObj = obj;
      this.gameID =  this.pathObj.params.id;
      this.gameDetail = this.dataService.getBoard(this.gameID);
      this.thisPlayer = this.pathObj.params.context;
      if (this.gameDetail.banker === this.thisPlayer) {
        this.context =  this.thisPlayer;
      }
      else {
        this.context = null;
      }
    });
  }

  switchContextTo(toContext) {
      this.context = toContext;
  }
}
