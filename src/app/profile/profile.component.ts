import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID = null;
  dialogRef = null;
  constructor(public dialog: MatDialog) {
  }
  ngOnInit(){
    setTimeout(() => {
      const dialogOptions = {
        width: '90vw',
        height: '140vw',
        hasBackdrop: false,
        disableClose: true,
      };
      this.dialogRef = this.dialog.open(ProfileDialog, dialogOptions);
    }, 20);
  }
}

@Component({
  selector: 'profile-dialog',
  templateUrl: './profile-dialog.html',
  styleUrls: ['./profile-dialog.css']
})
export class ProfileDialog implements OnInit {
  reason = '';
  registering = 'nostart';
  format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    private dataService: DataService,
    private router: Router,
    private loginService: LoginService,
    private ngZone: NgZone) {}
    public profile_path = '../../assets/images/pictures/0.jpg';
    public userData = null;
    ngOnInit() {
      this.loginService.getUser().subscribe((userData) => {
      this.userData = userData;
      this.profile_path = userData.image;
     });
    }

    register(userID: string) {
      if ((userID === '') || (userID === undefined)){
        this.reason = 'User ID cannot be empty';
      }
      else if ((userID.length  < 4) || (userID.length > 12)){
        this.reason = 'Length must be between 4 - 12';
      }
      else if(this.format.test(userID)) {
        this.reason = 'Space & special characters not allowed';
      }
      else {
        this.dataService.checkAvailability(userID).then(valid => {
          if (valid) {
            this.registering = 'start';
            this.dataService.createProfile(userID).then(response => {
              this.dialogRef.close();
              this.ngZone.run(() => {
                this.router.navigate(['mygames', userID], { replaceUrl: true });
              });
            });
          }
        }).catch(err => this.reason = err);
      }
  }
}