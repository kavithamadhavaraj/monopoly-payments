import { Component, OnInit, Input, NgZone } from '@angular/core';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Validators, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public profile_path = '../../assets/images/0.jpg';
  private createGameOptions = {
    hasBackdrop: true,
    disableClose: true,
    closeOnNavigation: true,
  };

  constructor(private loginService: LoginService, private dialog: MatDialog) { }
  userData: SocialUser;
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
  styleUrls: ['./create-game-dialog.component.css']
})
export class CreateGameDialog implements OnInit {
  valid = false;
  registering = 'nostart';
  available = false;
  public gameName = new FormControl('', [Validators.minLength(4), Validators.required, Validators.pattern('^[A-Z\\a-z\\d]+$')]);
  constructor(private dialogRef: MatDialogRef<CreateGameDialog>,
     private ngZone: NgZone, private dataService: DataService,
     private router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.gameName.valid === true) {
      this.valid = true;
    }
   return this.gameName.hasError('required') ? 'Game name cannot be empty' :
       this.gameName.hasError('minlength') ? 'Game name must be at least 4 characters long' :
       this.gameName.hasError('pattern') ? 'Space & special characters not allowed' :
       this.gameName.hasError('unavailable') ? 'Game name not available' :
       this.gameName.hasError('tryagain') ? 'Server error occured. Try again.' :
       null;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  register(gameName: string) {
    console.log(this.registering);
    this.gameName.markAsTouched();
    if (this.getErrorMessage() == null) {
      this.dataService.checkGameAvailability(gameName).then(available => {
        this.available = available;
        if (this.available === true) {
          this.registering = 'start';
          this.dataService.createGame(gameName).then(response => {
            console.log(response);
            this.dialogRef.close();
          });
        } else {
          this.gameName.setErrors({'unavailable' : true});
        }
      }).catch(err => this.gameName.setErrors({ 'tryagain' : true}));
    }
  }
}