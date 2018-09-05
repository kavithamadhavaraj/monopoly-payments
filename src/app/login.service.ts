import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public googleProvider = GoogleLoginProvider.PROVIDER_ID;
  public facebookProvider = FacebookLoginProvider.PROVIDER_ID;
  public socialPlatformProvider = null;
  constructor(private socialAuthService: AuthService ) { }

  authenticate(provider) {
    if (provider === 'google') {
      this.socialPlatformProvider = this.googleProvider;
    } else if (provider === 'facebook') {
      this.socialPlatformProvider = this.facebookProvider;
    }
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
