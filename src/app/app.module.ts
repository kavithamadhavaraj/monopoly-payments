import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PlayerFilterPipe } from './player-filter.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    BoardComponent,
    GameComponent,
    MainComponent,
    PlayerFilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
