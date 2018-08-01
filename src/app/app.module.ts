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
@NgModule({
  declarations: [
    MyGamesComponent,
    GameComponent,
    MainComponent,
    LoginComponent,
    ProfileComponent,
    ProfileDialog,
    GenericFilterPipe
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  entryComponents: [ProfileDialog]
})
export class AppModule { }
