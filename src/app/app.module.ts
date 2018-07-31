import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PlayerFilterPipe } from './player-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ProfileComponent, ProfileDialog } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTabsModule, MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
@NgModule({
  declarations: [
    BoardComponent,
    GameComponent,
    MainComponent,
    PlayerFilterPipe,
    LoginComponent,
    ProfileComponent,
    ProfileDialog
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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  entryComponents: [ProfileDialog]
})
export class AppModule { }
