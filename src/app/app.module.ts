import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    BoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BoardComponent]
})
export class AppModule { }
