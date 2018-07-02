import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {GameComponent} from './game/game.component';


const routes: Routes = [{
  path: 'game/:id',
  component: GameComponent
},
{
  path: 'board',
  component: BoardComponent
},
{
  path: '',
  redirectTo: '/board',
  pathMatch: 'full'
}
// },
// {
//   path: '**',
//   component: NotFoundComponent;
// }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
