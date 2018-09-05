import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
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
    private loginService: LoginService, private sanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon('google-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/blood-sample.svg'));
      this.iconRegistry.addSvgIcon('facebook-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/blood-sample.svg'));
      this.iconRegistry.getNamedSvgIcon('google-icon').subscribe((e) => {console.log(e); });
   }

  ngOnInit() {
  }

  googleLogin() {
    console.log('googlelogin');
    this.loginService.authenticate('google').then((response: SocialUser) => {
      this.router.navigate(['mygames', response.name], { replaceUrl: true });
    });
  }

  fbLogin() {
    console.log('fblogin');
    this.loginService.authenticate('facebook').then((response: SocialUser) => {
      this.router.navigate(['mygames', response.name], { replaceUrl: true });
    });
  }

}
