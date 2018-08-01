import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  userID = null;
  dialogRef = null;
  ngOnInit() {
    setTimeout(() => {
      const dialogOptions = {
        width: '80vw',
        height: '120vw',
        hasBackdrop: false,
        disableClose: true,
        data: this.userID
      };
      this.dialogRef = this.dialog.open(ProfileDialog, dialogOptions);
    }, 20);
  }
}

@Component({
  selector: 'profile-dialog',
  templateUrl: './profile-dialog.html'
})
export class ProfileDialog {
  reason = '';
  registering = 'nostart';
  format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    private dataService: DataService,
    private router: Router) {}

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
              this.router.navigate(['mygames', userID]);
            });
          }
        }).catch(err => this.reason = err);
      }
  }
}