import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile_path = '../../assets/images/0.jpg';
  public userData = null;
  public registering = 'nostart';
  public valid = false;
  public available = false;
  public userID = new FormControl('', [Validators.minLength(4), Validators.required, Validators.pattern('^[A-Z\\a-z\\d]+$')]);

  constructor(private router: Router, private ngZone: NgZone, private loginService: LoginService, private dataService: DataService) {
  }
  ngOnInit() {
    this.loginService.getUser().subscribe((userData) => {
    this.userData = userData;
    this.profile_path = userData.image;
  });
 }

 getErrorMessage() {
   if (this.userID.valid === true) {
     this.valid = true;
   }
  return this.userID.hasError('required') ? 'Player name cannot be empty' :
      this.userID.hasError('minlength') ? 'Player name must be at least 4 characters long' :
      this.userID.hasError('pattern') ? 'Space & special characters not allowed' :
      this.userID.hasError('unavailable') ? 'Player name not available' :
      this.userID.hasError('tryagain') ? 'Server error occured. Try again.' :
      null;
}

  register(userID: string) {
    this.userID.markAsTouched();
    if (this.getErrorMessage() == null) {
      this.dataService.checkProfileAvailability(userID).subscribe(available => {
        this.available = available;
        if (this.available === true) {
          this.registering = 'start';
          this.dataService.createProfile(userID, this.userData).subscribe(response => {
            if (response._id != null) {
              this.ngZone.run(() => {
                this.router.navigate(['mygames', userID], { replaceUrl: true });
              });
            }
          });
        } else {
          this.userID.setErrors({'unavailable' : true});
        }
      });
    }
  }
}

