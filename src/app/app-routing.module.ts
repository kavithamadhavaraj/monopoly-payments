import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {GameComponent} from './game/game.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'game/:id/:context',
    component: GameComponent
  },
  {
    path: 'board/:id',
    component: BoardComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
// {
//   path: '',
//   redirectTo: '/board',
//   pathMatch: 'full'
// }
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
