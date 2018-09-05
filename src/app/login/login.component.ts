import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';


// import * as oauth from 'oauth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {
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
