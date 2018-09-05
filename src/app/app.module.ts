import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyGamesComponent } from './mygames/mygames.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatTabsModule, MatDialogModule,
        MatProgressSpinnerModule, MatDividerModule, MatListModule,
        MatIconModule, MatToolbarModule, MatMenuModule,
        MatFormFieldModule, MatInputModule} from '@angular/material';
import { GenericFilterPipe } from './generic-filter.pipe';
import { GoogleLoginProvider, SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from 'angular5-social-login';
import { ToolbarComponent, CreateGameDialog } from './mygames/toolbar.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
@NgModule({
  declarations: [
    MyGamesComponent,
    GameComponent,
    MainComponent,
    LoginComponent,
    ProfileComponent,
    CreateGameDialog,
    GenericFilterPipe,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    SocialLoginModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [MainComponent],
  entryComponents: [CreateGameDialog]
})

export class AppModule { }
// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          // TODO: Move this key to a separate config file
          provider: new GoogleLoginProvider('462871257136-hedggfdor0mchtgschjj2fuv4dfphamk.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          // TODO: Move this key to a separate config file
          provider: new FacebookLoginProvider('261162644517129')
        }
      ]);
  return config;
}
