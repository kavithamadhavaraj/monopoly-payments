import { Component, OnInit, Input, NgZone, Inject } from '@angular/core';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Validators, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatIconRegistry, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public profile_path = '../../assets/images/0.jpg';
  public userData: SocialUser;

  constructor(private loginService: LoginService, private dialog: MatDialog) { }
  @Input() context = '';
  ngOnInit() {
    this.loginService.getUser().subscribe((userData) => this.userData = userData);
    this.profile_path = this.userData.image;
  }

  createGame() {
    const createGameOptions = {
      hasBackdrop: true,
      disableClose: true,
      closeOnNavigation: true,
      userData: this.userData
    };
    this.dialog.open(CreateGameDialog, createGameOptions);
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
  game_name = new FormControl('', [Validators.minLength(4), Validators.required, Validators.pattern('^[A-Z\\a-z\\d]+$')]);

  constructor(private dialogRef: MatDialogRef<CreateGameDialog>,
     private ngZone: NgZone, private dataService: DataService,
     private router: Router, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
     @Inject(MAT_DIALOG_DATA) public userData: any) {
      this.iconRegistry.addSvgIcon('white-close', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close-white.svg'));
      this.iconRegistry.addSvgIcon('dice', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/dice.svg'));
  }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.game_name.valid === true) {
      this.valid = true;
    }
   return this.game_name.hasError('required') ? 'Game name cannot be empty' :
       this.game_name.hasError('minlength') ? 'Game name must be at least 4 characters long' :
       this.game_name.hasError('pattern') ? 'Space & special characters not allowed' :
       this.game_name.hasError('unavailable') ? 'Game name not available' :
       this.game_name.hasError('tryagain') ? 'Server error occured. Try again.' :
       null;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  register(game_name: string) {
    console.log(this.registering);
    this.game_name.markAsTouched();
    if ((this.getErrorMessage() === null) && (game_name !== '')) {
      this.dataService.checkGameAvailability(this.userData, game_name).subscribe(available => {
        this.available = available;
        if (this.available === true) {
          this.registering = 'start';
          this.dataService.createGame(game_name).then(response => {
            console.log(response);
            this.dialogRef.close();
          });
        } else {
          this.game_name.setErrors({'unavailable' : true});
        }
      }); // catch(err => this.game_name.setErrors({ 'tryagain' : true}));
    }
  }
}
