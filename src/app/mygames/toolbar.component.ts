import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public profile_path = '../../assets/images/pictures/0.jpg';
  private createGameOptions = {
    width: '80%',
    height: '40%',
    hasBackdrop: false,
    disableClose: true
  };
  constructor(private loginService: LoginService, private dialog: MatDialog) { }
  userData:SocialUser;
  @Input() context = '';
  ngOnInit() {
    this.loginService.getUser().subscribe((userData) => this.userData = userData);
    this.profile_path = this.userData.image;
  }
  createGame() {
    this.dialog.open(CreateGameDialog, this.createGameOptions);
  }

  joinGame() {
    console.log('You joined');
  }
}


@Component({
  selector: 'create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-join-game.component.css']
})
export class CreateGameDialog implements OnInit {
  reason = '';
  registering = 'nostart';

  register(game_name: string) {
    console.log(game_name);
  }

  ngOnInit() {

  }
}