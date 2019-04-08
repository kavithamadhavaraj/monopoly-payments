import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';

import { SocialUser } from 'angular5-social-login';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// import * as oauth from 'oauth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private iconRegistry: MatIconRegistry, 
    private loginService: LoginService,  private dataService: DataService,  private sanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon('google-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/google.svg'));
      this.iconRegistry.addSvgIcon('facebook-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/fb.svg'));
   }

  ngOnInit() {
  }

  googleLogin() {
    console.log('googlelogin');
    this.loginService.authenticate('google').then((socialObj: SocialUser) => {
      this.dataService.findUserID(socialObj.email).subscribe(response => {
        this.router.navigate(['mygames', response['userID']], { replaceUrl: true });
      });
    });
  }

  fbLogin() {
    console.log('fblogin');
    this.loginService.authenticate('facebook').then((socialObj: SocialUser) => {
      this.dataService.findUserID(socialObj.email).subscribe(response => {
        this.router.navigate(['mygames', response], { replaceUrl: true });
      });
    });
  }

}
