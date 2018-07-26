import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameInfo } from '../game-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
  })
export class BoardComponent implements OnInit {
  constructor(private dataService:DataService, private route: ActivatedRoute) {
  }
  public userBoard: GameInfo[];
  public thisPlayer: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
        const user_id = params.id;
        this.userBoard = this.dataService.getBoardDetails(user_id);
        this.thisPlayer = user_id;
    });
  }
}
