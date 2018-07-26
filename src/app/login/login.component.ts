import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


// import * as oauth from 'oauth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private  Oauth2 = oauth.OAuth2;
  private loginStatus = false;
  private userData = null;
  constructor(private router: Router, private loginService: LoginService) {

   }

  ngOnInit() {
  }

  googleLogin() {
    console.log('googlelogin');
    const response = this.loginService.authenticate();
    if (response.status === true) {
        this.router.navigate(['board', response.data.user_id]);
    }
  //   const googleConsumerKey = '462871257136-hedggfdor0mchtgschjj2fuv4dfphamk.apps.googleusercontent.com';
  //    const googleConsumerSecret = 'ixQKfkok1VXb0hYKSt0HacDa';
  //    const oauth2 = new oauth.OAuth2(googleConsumerKey,
  //     googleConsumerSecret,
  //      'https://accounts.google.com/o/oauth2/',
  //       'auth',
  //       'token',
  //       {'Access-Control-Allow-Origin': '*' } );
  //    oauth2.getOAuthAccessToken(
  //      '',
  //      {'grant_type': 'client_credentials'},
  //      function (e, access_token, refresh_token, results){
  //         console.log('bearer: ', access_token);
  //      });
  }

  fbLogin() {
    console.log('fblogin');
  }

}
