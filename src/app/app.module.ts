import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    BoardComponent,
    GameComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
