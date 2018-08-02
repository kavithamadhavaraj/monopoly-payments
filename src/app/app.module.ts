import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyGamesComponent } from './mygames/mygames.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent, ProfileDialog } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCardModule, MatTabsModule, MatDialogModule, MatProgressSpinnerModule,
  MatDividerModule, MatListModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { GenericFilterPipe } from './generic-filter.pipe';
import {GoogleLoginProvider, SocialLoginModule, AuthServiceConfig} from 'angular5-social-login';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MyGamesComponent,
    GameComponent,
    MainComponent,
    LoginComponent,
    ProfileComponent,
    ProfileDialog,
    GenericFilterPipe,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    SocialLoginModule
  ],
  providers: [{provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}],
  bootstrap: [MainComponent],
  entryComponents: [ProfileDialog]
})

export class AppModule { }
// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('462871257136-hedggfdor0mchtgschjj2fuv4dfphamk.apps.googleusercontent.com')
        }
      ]);
  return config;
}
