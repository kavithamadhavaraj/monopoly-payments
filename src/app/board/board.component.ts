import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: [
    './board.component.css']
  })
export class BoardComponent implements OnInit {
  constructor() { }
  public userGameList: any = [
    {
      status: "On-going",
      gameId: "ID113",
      date: new Date("2018-08-10").toDateString()
    },
    {
      status: "Completed",
      gameId: "ID123",
      date: new Date("2018-03-10").toDateString()
    },
    {
      status: "Completed",
      gameId: "ID143",
      date: new Date("2018-02-15").toDateString()
    }
  ];

  ngOnInit() {
  }

  redirectToGamePage(gameId){
    console.log(gameId);
  }
}
