import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  constructor(private socialAuthService: AuthService ) { }

  authenticate() {
    return this.socialAuthService.signIn(this.socialPlatformProvider);
  }

  getUser() {
    return this.socialAuthService.authState;
  }

  logout() {
     this.socialAuthService.signOut().then((logoutdata) => {
      console.log('Signing out..');
    });
  }
}
