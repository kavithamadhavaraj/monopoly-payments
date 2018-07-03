import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GameInfo } from '../game-detail';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
  })
export class BoardComponent implements OnInit {
  constructor(private dataService:DataService) { }
  public userBoard: GameInfo[];
  public thisPlayer: string;
  ngOnInit() {
    this.userBoard = this.dataService.getBoardDetails();
    this.thisPlayer = 'Kavitha';
  }
}
